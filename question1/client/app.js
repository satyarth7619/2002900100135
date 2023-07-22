const btn = document.querySelector("#send");
const sendReq = async () => {
  const url = document.querySelector("#inputUrl").value;
  const param = url.split(", ");

  console.log(param);

  let newQuery = "";
  if (param.length > 1) {
    for (let i = 0; i < param.length; i++) {
      newQuery += "url=" + param[i]+'&';
    }
  } else {
    newQuery = "url" + param[0];
  }

  const URL = "http://localhost:8000/numbers?" + newQuery;
  console.log(URL)
  const head = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(URL,head);
  const result = await res.json();
  if(res.status===200){
    alert(result);
  }else{
    alert("Enter urls using comma and space");
  }
};
