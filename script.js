function createOrbit(id, radius, total) {

const orbit = document.getElementById(id);

for(let i=0;i<total;i++){

const angle=(360/total)*i;

const card=document.createElement("div");

card.className="card";

card.style.left=`
calc(
50% +
${Math.cos(angle*Math.PI/180)*radius}px
)
`;

card.style.top=`
calc(
50% +
${Math.sin(angle*Math.PI/180)*radius}px
)
`;

card.innerHTML=
`
<img src="https://picsum.photos/200/150?random=${Math.random()*1000}">
`;

orbit.appendChild(card);

}
}

createOrbit("orbit1",350,12);
createOrbit("orbit2",520,16);
createOrbit("orbit3",700,20);
