// Restricted arithmetic parser for short numeric answers. Never executes JavaScript.
export function parseNumericAnswer(value){
 let s=String(value??'').trim().toLowerCase().replace(/\s+/g,'').replace(/,/g,'.').replace(/[−–]/g,'-').replace(/[×·]/g,'*').replace(/÷/g,'/').replace(/π/g,'pi').replace(/²/g,'^2').replace(/³/g,'^3').replace(/√\(/g,'sqrt(').replace(/√(\d+(?:\.\d+)?)/g,'sqrt($1)');
 if(!s||s.length>180)throw new Error('Nhập một số, phân số hoặc biểu thức căn.');
 s=s.replace(/(\d|\))(?=sqrt|pi|\()/g,'$1*').replace(/(pi|\))(?=\d|sqrt|pi)/g,'$1*');
 const tokens=s.match(/sqrt|pi|(?:\d+(?:\.\d*)?|\.\d+)|[+*/^()-]/g)||[];
 if(tokens.join('')!==s||tokens.length>100)throw new Error('Chỉ nhận số, + − × ÷, lũy thừa, pi và sqrt(...).');
 let i=0,depth=0;
 function primary(){if(++depth>20)throw new Error('Biểu thức quá phức tạp.');const token=tokens[i++];let v;if(token==='('){v=add();if(tokens[i++]!==')')throw new Error('Thiếu dấu ngoặc.');}else if(token==='sqrt'){if(tokens[i++]!=='(')throw new Error('Dùng sqrt(...).');v=add();if(tokens[i++]!==')'||v<0)throw new Error('Căn không hợp lệ.');v=Math.sqrt(v);}else if(token==='pi')v=Math.PI;else if(token&&/^\d|^\./.test(token))v=Number(token);else throw new Error('Biểu thức chưa hợp lệ.');depth--;return v;}
 function power(){let a=primary();if(tokens[i]==='^'){i++;const b=unary();if(Math.abs(b)>12)throw new Error('Số mũ quá lớn.');a=a**b;}return a;}
 function unary(){if(tokens[i]==='+'){i++;return unary();}if(tokens[i]==='-'){i++;return -unary();}return power();}
 function mul(){let a=unary();while(tokens[i]==='*'||tokens[i]==='/'){const op=tokens[i++],b=unary();if(op==='/'&&b===0)throw new Error('Không thể chia cho 0.');a=op==='*'?a*b:a/b;}return a;}
 function add(){let a=mul();while(tokens[i]==='+'||tokens[i]==='-'){const op=tokens[i++],b=mul();a=op==='+'?a+b:a-b;}return a;}
 const result=add();if(i!==tokens.length||!Number.isFinite(result)||Math.abs(result)>1e15)throw new Error('Giá trị không hợp lệ.');return result;
}
export function gradeShortAnswer(question,response){
 if(question.acceptedAnswers){
  const normalize=value=>String(value).normalize('NFC').trim().toLocaleLowerCase('vi').replace(/[.!?]+$/,'').trim();
  return question.acceptedAnswers.some(answer=>normalize(answer)===normalize(response));
 }
 const value=parseNumericAnswer(response);
 return Math.abs(value-question.value)<=(question.tolerance??0.000051);
}
export function isAnswered(question,record){return ['short','true-false'].includes(question.kind)?!!record&&typeof record==='object'&&typeof record.correct==='boolean':Number.isInteger(record);}
export function isCorrect(question,record){return ['short','true-false'].includes(question.kind)?isAnswered(question,record)&&record.correct:record===question.answer;}
