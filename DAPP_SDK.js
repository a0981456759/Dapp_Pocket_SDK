function myFunction() {
  const start = async () => {
    let result = await window.ethereum.enable();
  };
  start()
    .then(res => {
      const account = window.web3.eth.defaultAccount;
      //   document.getElementById("account").innerHTML = account;
      alert("wellcome \n" + account);
      console.log(account);
    })
    .then(res => {
      const sign = window.web3.eth.personal.sign(
        "Hello", // message
        "0xc2e401dfd500ef5bfdc21e1d96b1bb0038c50516", //account
        "test_password" //sign password
      );
      // console.log(account);
    })
    .catch(response => {
      console.log("error");
    });
}
