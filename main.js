let scrollBtn = document.querySelector("#scrollBtn");
let scrollUp = document.querySelector("#scrollUp");
let hamburg = document.querySelector(".hamburg");
let pare2 = document.querySelector(".pare2");
let para = document.querySelector(".pare");
let a = document.querySelector("#a");
let aa = document.querySelector("#aa");
let b = document.querySelector("#b");
let ba = document.querySelector("#ba");
let c = document.querySelector("#c");
let ca = document.querySelector("#ca");
let d = document.querySelector("#d");
let da = document.querySelector("#da");
let e = document.querySelector("#e");
let ea = document.querySelector("#ea");
let f = document.querySelector("#f");
let fa = document.querySelector("#fa");
let g = document.querySelector("#g");
let ga = document.querySelector("#ga");
let h = document.querySelector("#h");
let ha = document.querySelector("#ha");
let i = document.querySelector("#i");
let ia = document.querySelector("#ia");
let j = document.querySelector("#j");
let ja = document.querySelector("#ja");
let k = document.querySelector("#k");
let ka = document.querySelector("#ka");
let l = document.querySelector("#l");
let la = document.querySelector("#la");
let q = document.querySelector("#q");
let w = document.querySelector("#w");
let z = document.querySelector("#z");
let r = document.querySelector("#r");
let t = document.querySelector("#t");
let y = document.querySelector("#y");
let page = document.querySelector("body");

scrollBtn.addEventListener("click", () => {
  if (window.scrollY < window.innerHeight) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 1 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight &&
    window.scrollY < window.innerHeight * 2
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 2 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 2);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight * 2 &&
    window.scrollY < window.innerHeight * 3
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 3 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 3);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight * 3 &&
    window.scrollY < window.innerHeight * 4
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 4 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 4);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight * 4 &&
    window.scrollY < window.innerHeight * 5
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 5 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 5);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight * 5 &&
    window.scrollY < window.innerHeight * 6
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 6 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 6);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight * 6 &&
    window.scrollY < window.innerHeight * 7
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 7 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 7);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight * 7 &&
    window.scrollY < window.innerHeight * 8
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 8 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 8);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight * 8 &&
    window.scrollY < window.innerHeight * 9
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 9 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 9);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight * 9 &&
    window.scrollY < window.innerHeight * 10
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 10 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 10);
    }, 600);
  }
  if (
    window.scrollY >= window.innerHeight * 10 &&
    window.scrollY < window.innerHeight * 11
  ) {
    scrollBy(0, -50);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 11 + 20);
    }, 300);
    setTimeout(() => {
      scrollTo(0, window.innerHeight * 11);
    }, 600);
  }
});
scrollUp.addEventListener("click", () => {
  if (window.scrollY <= window.innerHeight) {
    scrollTo(0, 0);

    return;
  }
  if (
    window.scrollY >= window.innerHeight &&
    window.scrollY <= window.innerHeight * 2
  ) {
    scrollTo(0, window.innerHeight);

    return;
  }
  if (
    window.scrollY >= window.innerHeight * 2 &&
    window.scrollY <= window.innerHeight * 3
  ) {
    scrollTo(0, window.innerHeight * 2);

    return;
  }
  if (
    window.scrollY >= window.innerHeight * 3 &&
    window.scrollY <= window.innerHeight * 4
  ) {
    scrollTo(0, window.innerHeight * 3);

    return;
  }
  if (
    window.scrollY >= window.innerHeight * 4 &&
    window.scrollY <= window.innerHeight * 5
  ) {
    scrollTo(0, window.innerHeight * 4);

    return;
  }
  if (
    window.scrollY >= window.innerHeight * 5 &&
    window.scrollY <= window.innerHeight * 6
  ) {
    scrollTo(0, window.innerHeight * 5);

    return;
  }
  if (
    window.scrollY >= window.innerHeight * 6 &&
    window.scrollY <= window.innerHeight * 7
  ) {
    scrollTo(0, window.innerHeight * 6);

    return;
  }
  if (
    window.scrollY >= window.innerHeight * 7 &&
    window.scrollY <= window.innerHeight * 8
  ) {
    scrollTo(0, window.innerHeight * 7);

    return;
  }
  if (
    window.scrollY >= window.innerHeight * 8 &&
    window.scrollY <= window.innerHeight * 9
  ) {
    scrollTo(0, window.innerHeight * 8);

    return;
  }
  if (
    window.scrollY >= window.innerHeight * 9 &&
    window.scrollY <= window.innerHeight * 10
  ) {
    scrollTo(0, window.innerHeight * 9);

    return;
  }
  if (
    window.scrollY >= window.innerHeight * 10 &&
    window.scrollY <= window.innerHeight * 11
  ) {
    scrollTo(0, window.innerHeight * 10);

    return;
  }
  console.log(window.scrollY);
});

const scrollto = (page) => {
  console.log(page);
  window.scrollBy(0, page);
};

d.addEventListener("click", () => {
  scrollFunc(3, r);
});
da.addEventListener("click", () => {
  scrollFunc(3, r);
});
a.addEventListener("click", () => {
  scrollFunc(0, q);
});
aa.addEventListener("click", () => {
  scrollFunc(0, q);
});
b.addEventListener("click", () => {
  scrollFunc(1, w);
});
ba.addEventListener("click", () => {
  scrollFunc(1, w);
});
c.addEventListener("click", () => {
  scrollFunc(2, z);
});
ca.addEventListener("click", () => {
  scrollFunc(2, z);
});
e.addEventListener("click", () => {
  scrollFunc(4, t);
});
ea.addEventListener("click", () => {
  scrollFunc(4, t);
});
f.addEventListener("click", () => {
  scrollFunc(5, y);
});
fa.addEventListener("click", () => {
  scrollFunc(5, y);
});
g.addEventListener("click", () => {
  scrollFunc(6, y);
});
ga.addEventListener("click", () => {
  scrollFunc(6, y);
});
h.addEventListener("click", () => {
  scrollFunc(7, y);
});
ha.addEventListener("click", () => {
  scrollFunc(7, y);
});
i.addEventListener("click", () => {
  scrollFunc(8, y);
});
ia.addEventListener("click", () => {
  scrollFunc(8, y);
});
j.addEventListener("click", () => {
  scrollFunc(9, y);
});
ja.addEventListener("click", () => {
  scrollFunc(9, y);
});
k.addEventListener("click", () => {
  scrollFunc(10, y);
});
ka.addEventListener("click", () => {
  scrollFunc(10, y);
});
la.addEventListener("click", () => {
  scrollFunc(11, y);
});
l.addEventListener("click", () => {
  scrollFunc(11, y);
});
// handles the scroll to a specific month
const scrollFunc = (page, o) => {
  scrollBy(0, -50);
  setTimeout(() => {
    scrollTo(0, window.innerHeight * page + 20);
  }, 300);
  setTimeout(() => {
    scrollTo(0, window.innerHeight * page);
  }, 500);
  setTimeout(() => {}, 10000);
};
window.onscroll = () => {};
//change colors of months as they scroll into view
setInterval(() => {
  window.onscroll = () => {
    if (window.scrollY < window.innerHeight) {
      a.style.color = "blue";
    } else {
      a.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight &&
      window.scrollY < window.innerHeight * 2
    ) {
      para.style.color = "#ffffff";
      b.style.color = "blue";
    } else {
      b.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 2 &&
      window.scrollY < window.innerHeight * 3
    ) {
      c.style.color = "blue";
    } else {
      c.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 3 &&
      window.scrollY < window.innerHeight * 4
    ) {
      d.style.color = "blue";
    } else {
      d.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 4 &&
      window.scrollY < window.innerHeight * 5
    ) {
      e.style.color = "blue";
    } else {
      e.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 5 &&
      window.scrollY < window.innerHeight * 6
    ) {
      f.style.color = "blue";
    } else {
      f.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 6 &&
      window.scrollY < window.innerHeight * 7
    ) {
      g.style.color = "blue";
    } else {
      g.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 7 &&
      window.scrollY < window.innerHeight * 8
    ) {
      h.style.color = "blue";
    } else {
      h.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 8 &&
      window.scrollY < window.innerHeight * 9
    ) {
      i.style.color = "blue";
    } else {
      i.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 9 &&
      window.scrollY < window.innerHeight * 10
    ) {
      j.style.color = "blue";
    } else {
      j.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 10 &&
      window.scrollY < window.innerHeight * 11
    ) {
      k.style.color = "blue";
    } else {
      k.style.color = "#ffffff";
    }
    if (
      window.scrollY >= window.innerHeight * 11 &&
      window.scrollY < window.innerHeight * 12
    ) {
      l.style.color = "blue";
    } else {
      l.style.color = "#ffffff";
    }
  };
  // if (window.screen.width < 460) {
  //   document.body.removeChild(pare);
  // } else {
  //   document.body.appendChild(pare);
  // }
}, 300);

hamburg.onclick = (e) => {
  let target = e.currentTarget;
  if (
    target.getAttribute("class") === "hamburg" &&
    (pare2.style.animationName === "slideOut" ||
      pare2.style.animationName === "")
  ) {
    pare2.style.animationName = "slideIn";
    target.setAttribute("class", "activ");
    return;
  }
  pare2.style.animationName = "slideOut";
  target.setAttribute("class", "hamburg");
};
