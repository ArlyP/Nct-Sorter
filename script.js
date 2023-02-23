let nctMembers = [
  {
    name: "Taeil",
    image: "asset/1.jpg",
  },
  {
    name: "Johnny",
    image: "asset/2.jpg",
  },
  {
    name: "Taeyong",
    image: "asset/3.jpg",
  },
  {
    name: "Yuta",
    image: "asset/4.jpg",
  },
  {
    name: "Kun",
    image: "asset/5.jpg",
  },
  {
    name: "Doyoung",
    image: "asset/6.jpg",
  },
  {
    name: "Ten",
    image: "asset/7.jpg",
  },
  {
    name: "Jaehyun",
    image: "asset/8.jpg",
  },
  {
    name: "Winwin",
    image: "asset/9.jpg",
  },
  {
    name: "Jungwoo",
    image: "asset/10.jpg",
  },
  {
    name: "Lucas",
    image: "asset/11.jpg",
  },
  {
    name: "Mark Lee",
    image: "asset/12.jpg",
  },
  {
    name: "Xiaojun",
    image: "asset/13.jpg",
  },
  {
    name: "Hendery",
    image: "asset/14.jpg",
  },
  {
    name: "Renjun",
    image: "asset/15.jpg",
  },
  {
    name: "Jeno",
    image: "asset/16.jpg",
  },
  {
    name: "Haechan",
    image: "asset/17.jpg",
  },
  {
    name: "Jaemin",
    image: "asset/18.jpg",
  },
  {
    name: "Yangyang",
    image: "asset/19.jpg",
  },
  {
    name: "Shotaro",
    image: "asset/20.jpg",
  },
  {
    name: "Sungchan",
    image: "asset/21.jpg",
  },
  {
    name: "Chenle",
    image: "asset/22.jpg",
  },
  {
    name: "Jisung",
    image: "asset/23.jpg",
  },
];

nctMembers.forEach((item) => {
  item.suka = 0;
});

const sorter = document.getElementById("nctshorter");
let imgRow1 = document.getElementById("imgRow1");
let nameRow1 = document.getElementById("nameRow1");
let imgRow2 = document.getElementById("imgRow2");
let nameRow2 = document.getElementById("nameRow2");
const tie = document.getElementById("tie");
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const c = console.log;

// Persen
const tabung = document.getElementById("persentase");
const persen = document.getElementById("persen");

// Index
let index = 0;
let indexTwo = 1;
let klik = 0;

function jumlahKlik() {
  return klik++;
}
function one() {
  index = (index + 2) % 24;
}
function two() {
  indexTwo = (indexTwo + 2) % 23;
  if (indexTwo === 2) {
    indexTwo = 1;
  }
}

// Animasi Start
document.getElementById("start").addEventListener("click", function () {
  document.getElementById("body").classList.toggle("start");
  document.getElementById("tombol-start").style.display = "none";
  document.getElementById("nctshorter").style.display = "block";
  document.getElementById("nctshorter").style.animation = "blur 0.5s";

  c(index);
  // Menampilkan Member
  imgRow1.setAttribute("src", nctMembers[index].image);
  nameRow1.innerHTML = nctMembers[index].name;
  imgRow2.setAttribute("src", nctMembers[indexTwo].image);
  nameRow2.innerHTML = nctMembers[indexTwo].name;
});

// member yang dipilih

function klik1() {
  document.getElementById("tap").innerHTML =
    "Kamu memilih: " + nctMembers[index].name;
  nctMembers[index[0]];
  // memberi suka ke member
  if (nctMembers[index].suka === 0) {
    nctMembers[index].suka = 1;
    c("suka");
  } else if (nctMembers[index].suka === 1) {
    nctMembers[index].suka = 2;
    c("suka");
  } else if (nctMembers[index].suka === 2) {
    nctMembers[index].suka = 3;
    c("suka");
  } else if (nctMembers[index].suka === 3) {
    nctMembers[index].suka = 4;
    c("suka");
  }

  c(nctMembers[index]);
}

function klik2() {
  document.getElementById("tap").innerHTML =
    "Kamu memilih: " + nctMembers[indexTwo].name;
  nctMembers[indexTwo];
  // memberi suka ke member
  if (nctMembers[indexTwo].suka === 0) {
    nctMembers[indexTwo].suka = 1;
    c("suka");
  } else if (nctMembers[indexTwo].suka === 1) {
    nctMembers[indexTwo].suka = 2;
    c("suka");
  } else if (nctMembers[indexTwo].suka === 2) {
    nctMembers[indexTwo].suka = 3;
    c("suka");
  } else if (nctMembers[indexTwo].suka === 3) {
    nctMembers[indexTwo].suka = 4;
    c("suka");
  }
  c(nctMembers[indexTwo]);
}

imgRow1.addEventListener("click", klik1);
imgRow2.addEventListener("click", klik2);

sorter.addEventListener("click", (event) => {
 
  // Menampilkan Member ketika di klik
  if (event.target == imgRow1) {
    one();
    two();
    c(index);
    c(indexTwo);
    c("klik " + klik);
    imgRow1.setAttribute("src", nctMembers[index].image);
    nameRow1.innerText = nctMembers[index].name;
    imgRow2.setAttribute("src", nctMembers[indexTwo].image);
    nameRow2.innerText = nctMembers[indexTwo].name;
    jumlahKlik();
  } else if (event.target == imgRow2) {
    one();
    two();
    c(index);
    c(indexTwo);
    c("klik " + klik);
    imgRow1.setAttribute("src", nctMembers[index].image);
    nameRow1.innerText = nctMembers[index].name;
    imgRow2.setAttribute("src", nctMembers[indexTwo].image);
    nameRow2.innerText = nctMembers[indexTwo].name;
    jumlahKlik();
  } else if (event.target === tie) {
    klik1();
    klik2();
    document.getElementById("tap").innerHTML = "TIE ";
    one();
    two();
    c(index);
    c(indexTwo);
    c("klik " + klik);
    imgRow1.setAttribute("src", nctMembers[index].image);
    nameRow1.innerText = nctMembers[index].name;
    imgRow2.setAttribute("src", nctMembers[indexTwo].image);
    nameRow2.innerText = nctMembers[indexTwo].name;
    jumlahKlik();
  }
});

 

let nilai = 0;

// menambah persen ketika diklik
function counter() {
  nilai++;
  c("nilai " + nilai)
      // soerter acak
      if( nilai === 12 && nilai < 24){
        nctMembers.sort(() => Math.random() - 0.5);
        c("Tahap Pertama")
      } else if(nilai === 24 && nilai < 36){
        nctMembers.sort(() => Math.random() - 0.5);
        c("tahap Kedua")
      } else if(nilai === 36){
        nctMembers.sort((a,b) => a.suka - b.suka);
        c("tahap Kedua")
      }
  persen.textContent = nilai * Math.floor(2.08) + "%";
  // Warana Tabung Persen
  if (nilai * 2.08 < 100) {
    tabung.style.backgroundColor = "#662d91";
    tabung.style.width = nilai * 2 + "%";
  } else if (nilai * 2.08 >= 100) {
    // Mengurutkan member sorter
    // menampilkan hasil
    document.getElementById("hasil").classList.add("aktif");
    document.getElementById("nctshorter").style.display = "none";
    document.getElementById("result").style.display = "flex";
    nctMembers.sort((a,b) => b.suka - a.suka);
    
    const container = document.getElementById("hasil");
    nctMembers.forEach((item, i) => {
      const imgSrc = item.image;
      const text = item.name;
      const div = document.createElement("div");
      const img = document.createElement("img");
      const p = document.createElement("p");
      const urutan = document.createElement("p");

      img.src = imgSrc;
      img.className = "img-hasil";
      p.textContent = text;
      urutan.textContent = `${i + 1}`;
      urutan.className = "nomor-urut";

      div.appendChild(urutan);
      div.appendChild(img);
      div.appendChild(p);
      container.appendChild(div);
    });
  }
}
imgRow1.addEventListener("click", counter);
imgRow2.addEventListener("click", counter);
tie.addEventListener("click", counter);

