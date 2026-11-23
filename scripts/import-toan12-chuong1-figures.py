"""Trích riêng hình/bảng của Chuong_1.pdf; không dùng ảnh thay công thức HTML."""
from pathlib import Path
import json
import sys
import re
import pdfplumber
import pypdfium2 as pdfium
from PIL import Image, ImageDraw

source = Path(sys.argv[1])
root = Path(__file__).resolve().parents[1]
out = root / 'site/toan12-chuong1'
out.mkdir(parents=True, exist_ok=True)
pdf = pdfium.PdfDocument(source)
layout = pdfplumber.open(source)
locations = {}
cache = root / 'tmp/pdfs/toan12-chuong1/layout.json'
if cache.exists():
    for page in json.loads(cache.read_text(encoding='utf-8')):
        for marker in page['markers']:
            locations[marker['n']] = (page['page'], marker['y'])
else:
    for page_no, page in enumerate(layout.pages, 1):
        words = page.extract_words(x_tolerance=2)
        for i, word in enumerate(words[:-1]):
            if word['text'] == 'Câu' and re.fullmatch(r'\d+\.', words[i+1]['text']):
                locations[int(words[i+1]['text'][:-1])] = (page_no, word['top'])

figures = [1,2,4,7,8,11,12,13,16,17,19,20,22,23,24,25,27,28,29,35,37,38,39,40,41,42,43,44,47,50,52,53,54,55,56,67,70,72,74,77,78,81,83,86,88,89,90,93,94,95,96,98,100,101,102,103,104,105]
# Trang tiếp nối hoặc ảnh có biến đổi tọa độ không được Poppler/plumber báo đúng.
manual = {
    1: (1, (186,110,423,222)),
    2: (2, (200,85,405,295)),
    4: (3, (205,55,410,244)),
    7: (4, (195,55,410,240)),
    8: (4, (170,434,435,535)),
    11: (5, (205,477,405,573)),
    13: (6, (165,430,445,562)),
    16: (7, (174,174,434,292)),
    17: (7, (168,439,442,556)),
    20: (8, (188,441,422,548)),
    23: (9, (200,589,410,663)),
    35: (13, (158,591,452,642)),
    39: (15, (200,64,410,171)),
    41: (16, (165,49,445,155)),
    42: (16, (165,313,445,419)),
    43: (17, (185,50,425,287)),
    44: (17, (154,389,456,490)),
    47: (18, (176,213,434,257)),
    53: (20, (161,130,449,249)),
    54: (20, (132,432,477,493)),
    56: (21, (243,540,365,622)),
    12: (6, (250,65,385,235)),
    22: (9, (65,303,545,482)),
    67: (30, (240,97,370,215)),
    72: (34, (235,75,370,225)),
    77: (38, (170,150,435,325)),
    78: (39, (175,353,430,558)),
    81: (42, (145,110,460,292)),
    83: (44, (150,145,455,282)),
    86: (47, (195,440,410,612)),
    88: (50, (225,86,380,235)),
    89: (51, (175,30,430,151)),
    90: (52, (145,72,460,220)),
    93: (54, (165,112,465,237)),
    94: (55, (120,104,490,143)),
    95: (56, (120,342,485,455)),
    96: (58, (245,100,365,280)),
    98: (60, (185,98,425,210)),
    100: (61, (170,550,435,705)),
    101: (63, (220,80,405,230)),
    102: (64, (190,100,420,194)),
    103: (65, (198,322,415,430)),
    104: (66, (265,160,345,302)),
    105: (67, (120,90,490,198)),
}
records = []
for n in figures:
    if n in manual:
        page_no, box = manual[n]
    else:
        page_no, y = locations[n]
        page = layout.pages[page_no-1]
        words = page.extract_words(x_tolerance=2)
        next_y = min([v[1] for k,v in locations.items() if k>n and v[0]==page_no]+[790])
        if n < 58:
            end = min([w['top'] for w in words if w['text']=='A' and y+15<w['top']<next_y]+[next_y])
        else:
            end = min([w['top'] for w in words if w['text'] in ['a)', 'a)'] and y+15<w['top']<next_y]+[next_y])
        candidates = []
        for obj in page.curves+page.rects+page.images:
            w,h = obj['x1']-obj['x0'],obj['bottom']-obj['top']
            if obj['top']>=y+12 and obj['bottom']<=end-3 and ((w>60 and h>15) or (h>60 and w<10)):
                candidates.append(obj)
        if not candidates:
            raise RuntimeError(f'Không tìm được hình câu {n}, trang {page_no}')
        box=(max(40,min(o['x0'] for o in candidates)-18),max(y+14,min(o['top'] for o in candidates)-5),min(555,max(o['x1'] for o in candidates)+18),min(end-2,max(o['bottom'] for o in candidates)+6))
    image=pdf[page_no-1].render(scale=2.5).to_pil().convert('RGB')
    image=image.crop(tuple(round(v*2.5) for v in box))
    image.save(out/f'{n}.webp',quality=94,method=6)
    records.append({'number':n,'page':page_no,'crop':list(box),'file':f'{n}.webp'})
manifest={'source':source.name,'pages':len(pdf),'questions':{str(n):{'page':p,'top':round(y,2)} for n,(p,y) in locations.items()},'figures':records}
(out/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
# Contact sheet phục vụ kiểm tra các ảnh đã cắt.
tmp=root/'tmp/pdfs/toan12-chuong1'
for start in range(0,len(records),12):
    group=records[start:start+12];sheet=Image.new('RGB',(1200,4*250),'#ddd');draw=ImageDraw.Draw(sheet)
    for i,rec in enumerate(group):
        im=Image.open(out/rec['file']);im.thumbnail((390,220))
        x,y=(i%3)*400,(i//3)*250;sheet.paste(im,(x,y+25));draw.text((x+8,y+5),f"Cau {rec['number']} / page {rec['page']}",fill='black')
    sheet.save(tmp/f'figures-{start//12+1}.png')
print(f'Extracted {len(records)} figures from {len(locations)} questions.')
