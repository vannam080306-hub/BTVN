// Hình biểu diễn chung, dùng nét đứt cho các cạnh bị khuất.
const tetra = labels => ({
  name: `Tứ diện ${labels.join('')}`,
  points: [[155,28],[40,166],[248,187],[295,110]], labels,
  edges: [[0,1],[0,2],[0,3],[1,2],[2,3]], hidden: [[1,3]]
});
const diagrams = {
  tetra: tetra(['A','B','C','D']),
  stetra: tetra(['S','A','B','C']),
  pyramid: {name: 'Hình chóp S.ABCD', points: [[175,24],[85,112],[35,175],[240,188],[290,118]], labels: ['S','A','B','C','D'], edges: [[0,2],[0,3],[0,4],[1,2],[2,3],[3,4]], hidden: [[0,1],[1,4]]},
  prism: {name: 'Lăng trụ ABC.A′B′C′', points: [[65,175],[240,185],[285,125],[42,76],[217,86],[262,26]], labels: ['A','B','C','A′','B′','C′'], edges: [[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],[5,3]], hidden: [[0,2]]},
  box: {name: 'Hình hộp ABCD.A′B′C′D′', points: [[45,165],[230,185],[295,132],[110,112],[45,65],[230,85],[295,32],[110,12]], labels: ['A','B','C','D','A′','B′','C′','D′'], edges: [[0,1],[1,2],[0,4],[1,5],[2,6],[4,5],[5,6],[6,7],[7,4]], hidden: [[0,3],[3,2],[3,7]]}
};

export function geometryFigure(kind) {
  const d = diagrams[kind];
  if (!d) return '';
  const line = ([a,b], hidden) => `<line x1="${d.points[a][0]}" y1="${d.points[a][1]}" x2="${d.points[b][0]}" y2="${d.points[b][1]}"${hidden ? ' stroke-dasharray="6 5" opacity="0.6"' : ''}/>`;
  return `<figure class="geometry-figure"><svg viewBox="0 0 340 220" role="img" aria-label="${d.name}"><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round">${d.hidden.map(e=>line(e,true)).join('')}${d.edges.map(e=>line(e,false)).join('')}</g>${d.points.map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="2.5" fill="currentColor" stroke="none"/><text x="${x+8}" y="${y+4}" fill="currentColor" stroke="none" font-size="15" font-family="sans-serif">${d.labels[i]}</text>`).join('')}</svg><figcaption>Hình biểu diễn chung. Các điểm phụ được xác định theo đề bài.</figcaption></figure>`;
}
