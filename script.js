const createDiv = () => {
    const existingDiv = document.getElementById("msg-alert");
    if (!existingDiv) {
      const div = document.createElement("div");
      div.className = "alert";
      div.id = "msg-alert";
      document.body.appendChild(div);
  
      const span = document.createElement("span");
      span.className = "closebtn";
      div.appendChild(span);
  
      const referenceDiv = document.getElementById("refDiv");
      referenceDiv.insertAdjacentElement("beforeend", div);
    }
  }
 
  const form = document.querySelector("#cadUser");
  
  form.onclick = (event) => {
    event.preventDefault();
    const name = document.querySelector("#nome-box").value
    const email = document.querySelector("#email-box").value
    const phone = document.querySelector("#phone-box").value
  
    if (name === "") {
      event.preventDefault()
      document.getElementById("msg-alert").innerHTML =
        "Por favor preencha o campo nome";
    } else if (email === "") {
      event.preventDefault()
      document.getElementById("msg-alert").innerHTML =
        "Por favor preencha o campo email";
    } else if (phone === "") {
      event.preventDefault()
      document.getElementById("msg-alert").innerHTML =
        "Por favor preencha o campo telefone";
    } else {
      event.preventDefault()
      document.getElementById("msg-alert").style.backgroundColor = " #91fa07"; // Mudar cor da div para verde
      document.getElementById("msg-alert").style.color = "#418007";
      document.getElementById("msg-alert").innerHTML =
        "Formulario enviado com sucesso";
    }
    return;
  };
  
  const addElement = () => {
    const link = document.createElement("a");
    link.id = "dev-footer";
    link.href =
      "https://www.instagram.com/biispocarol/?igshid=ZGUzMzM3NWJiOQ%3D%3D";
    link.target = "_blank";
    const newContent = document.createTextNode(
      "© Developed by  Carolina Bispo, 2023."
    );
    link.appendChild(newContent);
    const currentDiv = document.getElementById("teste");
    currentDiv.insertAdjacentElement("beforeend", link);
  };
  addElement();