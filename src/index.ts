const Slot1 = document.querySelector('#Slot1')
const Slot2 = document.querySelector('#Slot2')
const Slot3 = document.querySelector('#Slot3')

var SlotImg1 = document.getElementById('SlotImg1')
const Button = document.querySelector('#ButtonRoller')
const reels = [
  document.getElementById("symbol-container1"),
  document.getElementById("symbol-container2"),
  document.getElementById("symbol-container3"),
];

const handle = document.getElementById("handle");
const resultMessage = document.getElementById("resultMessage");
const confettiContainer = document.getElementById("confetti");

const symbols = ["<img src=\"./Images/FlonneSlot1.webp\">", "<img src=\"./Images/LaharlSlot2.webp\">", "<img src=\"./Images/LaharlSlot2.webp\">",
"<img src=\"./Images/EtnaSlot3.webp\">", "<img src=\"./Images/DisgeaLoveCombo.webp\">"];
const spinDuration = 500; // Spin duration in milliseconds
let isSpinning = false;
Button!.addEventListener('click', () => { 
    if (isSpinning) return;
    isSpinning = true;
  
  
    // Randomize spin for each reel
    reels.forEach((reel) => {
      const randomStop = Math.floor(Math.random() * symbols.length) * -100;
      reel!.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
      reel!.style.transform = `translateY(${randomStop}px)`;
    });
  
    // Check result after all reels stop
    setTimeout(() => {
      checkResult();
      isSpinning = false;
    }, spinDuration);
    var a = Math.floor(Math.random() * 10 + 1);
    var b = Math.floor(Math.random() * 10 + 1);
    var c = Math.floor(Math.random() * 10 + 1);
   /* const Slot1Number = document.querySelector('#Number1')
 Slot1Number!.innerHTML = a as unknown as string
  Slot1!.append(Slot1Number!)
  if (a == 2) {
    Slot1Number!.innerHTML = "<img src=\"./Images/LaharlSlot2.webp\">"
  }
  const Slot2Number = document.querySelector('#Number2')
 Slot2Number!.innerHTML = b as unknown as string
  Slot3!.append(Slot2Number!)
  const Slot3Number = document.querySelector('#Number3')
 Slot3Number!.innerHTML = c as unknown as string
  Slot3!.append(Slot3Number!)*/
  });
  function checkResult() {
    const symbol1 = getSymbolAtStop(reels[0]);
    const symbol2 = getSymbolAtStop(reels[1]);
    const symbol3 = getSymbolAtStop(reels[2]);

    if (symbol1 === symbol2 && symbol2 === symbol3) {
         const his = document.querySelector('#Testthis')
    his!.textContent = "HELLOOOOOOOOO"
     // resultMessage!.textContent = "You Win!";
      //resultMessage!.classList.add("show-message", "win-effect");
    } else {
     // resultMessage!.textContent = "";
    //  resultMessage!.classList.add("show-message");
    }

  }
  
  function getSymbolAtStop(reel: HTMLElement | null) {
    const translateY = parseInt(
      reel!.style.transform.replace("translateY(", "").replace("px)", "")
    );
    const symbolIndex = Math.abs(translateY / 100) % symbols.length;
    return symbols[symbolIndex];
  }