// const loadQuote = () => {
//   fetch("https://api.kanye.rest/")
//     .then((res) => res.json())
//     .then((data) => displayQuote(data));
// };

const loadQuote2 = async () => {
  try {
    const url = "https://api.kanye.rest/";
    const res = await fetch(url);
    const data = await res.json();
    displayQuote(data);
  } catch (error) {
    console.log(error);
  }
};

const displayQuote = (data) => {
  const blockQuote = document.getElementById("quotes");
  console.log(data);
  blockQuote.innerHTML = `${data.quote}`;
};

loadQuote2();
