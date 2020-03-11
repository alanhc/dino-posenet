let data;
let table;
function preload() {

}
function setup() {

    createCanvas(100, 100);
    background(0);
    table = createElement('table');
    table.position(windowWidth/2,0);
    let t_r = createElement("tr");
    let t_d_rank = createElement("td","名次");
    let t_d_email = createElement("td","email");
    let t_d_name = createElement("td", "姓名");
    let t_d_score = createElement("td", "分數");
    t_r.child(t_d_rank);
    t_r.child(t_d_email);
    t_r.child(t_d_name);
    t_r.child(t_d_score);
    table.child(t_r);

}
async function mousePressed() {
    
    
    await getData();
   

    for (let i = 0; i < data.length; i++) {
        let t_r = createElement("tr");
        let t_d_rank = createElement("td",(i+1)+". ");
        let t_d_email = createElement(data[i].email);
        let t_d_name = createElement("td", data[i].name);
        let t_d_score = createElement("td", data[i].score);
        t_r.child(t_d_rank);
        t_r.child(t_d_email);
        t_r.child(t_d_name);
        t_r.child(t_d_score);
        table.child(t_r);
    }

}
function draw() {

}
async function getData() {
    let url = 'https://jamfly.dev/api/rank';

    let re = await fetch(url);
    data = await re.json();

    console.log(data);


    return "done";
}