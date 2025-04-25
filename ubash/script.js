let key = document.getElementById("input");
key.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    run();
  }
});

const creditCarNums = [
  '8002-3004-6641-6552',  
  '4659-8194-2717-5773',  
  '5310-0738-5257-4320',  
  '3726-6616-1254-3180',  
  '7828-6449-4351-4011',  
  '0644-5939-6457-0867',  
  '6713-5706-7942-4827',  
  '2106-8610-4160-3487',  
  '2763-5449-2190-2094',  
  '9126-5230-8314-2647',  
  '8312-9651-9241-8567',  
  '6652-8808-7506-1723',  
  '9146-3913-6989-3980',  
  '3669-9218-5801-2833',  
  '0996-9548-2496-0239',  
  '7671-4490-3900-1582',  
  '6293-9335-9926-6787',  
  '7079-3306-6091-4884',  
  '2308-8286-1116-7791',  
  '7472-3702-4284-6695',  
  '3927-8838-3159-1291',  
  '7722-5522-8645-5474',  
  '1262-7438-0235-5469',  
  '4803-8767-7350-3979',  
  '8798-0377-9974-3263',  
  '5255-7518-6504-5876',  
  '2971-2736-5467-0419',  
  '0322-4425-3374-1788',  
  '0935-4509-0658-1286',  
  '4262-6054-4778-8424',  
  '6698-0464-5191-7584',  
  '9815-7722-4995-1726',  
  '3244-7878-2371-9113',  
  '3389-4665-4320-6594',  
  '6549-9253-1482-9401',  
  '1443-9740-8769-3306',  
  '7900-6816-2079-5589',  
  '9939-6098-9623-3253',  
  '0849-3430-0817-6464',  
  '5859-5055-3417-4133',  
  '7493-0193-9275-5538',  
  '8666-3552-2899-4206',  
  '4818-7349-8346-3430',  
  '6459-1695-9812-6208',  
  '8358-4054-4428-7057',  
  '9821-8354-9119-2907',  
  '7848-5937-7117-4579',  
  '0241-1861-0713-0418',  
  '9671-1941-9749-7810',
  '4832-9029-1875-5831'
]

var randomCreditCardNum = creditCarNums[Math.floor(Math.random() * creditCarNums.length)];

function run() {
    var input = document.getElementById("input"); // the input (cmd line)
    var text = document.getElementById("text"); // the text box i change
    var user = document.getElementById("user"); // the user for example root@vm:~/
    var utof = "Unable to open file."; 
    var domain = input.value; // url to open website with command

    if(input.value === "help") {
        input.value = "";
        text.innerHTML = `Welcome to <b class='purple'>uBash</b><br>
        This terminal is strongly inspired by the<br>Linux terminal
        called bash. Down below are some commands for this terminal.
        <br><br>clear - clears the screen<br>ls - lists directories<br>
        cd &lt;path to directory> - changes to that directory<br>
        to open a file, simply type the filename.filextension<br>
        [cd -] - this command (without brackets) goes back in directory<br>
        nt [domain.tld] - this, without brackets, will open the wanted domain`;
    } else if(input.value === "clear") {
        input.value = "";
        text.innerHTML = "";
    } else if(user.textContent === "root@vm:~/") {
        if(input.value === "ls") {
          input.value = "";
          text.innerHTML = `/bin<br>/boot<br>/home<br>/usr`;
        } else if(input.value === "cd /bin") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/bin</span></b>";
        } else if(input.value === "cd bin") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/bin</span></b>";
        } else if(input.value === "cd /boot") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/boot</span></b>";
        } else if(input.value === "cd boot") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/boot</span></b>";
        } else if(input.value === "cd /home") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home</span></b>";
        } else if(input.value === "cd /home/Documents") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents</span></b>";
        } else if(input.value === "cd /home/documents") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents</span></b>";
        } else if(input.value === "cd home/Documents") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents</span></b>";
        } else if(input.value === "cd home/documents") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents</span></b>";
        } else if(input.value === "cd home") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home</span></b>";
        } else if(input.value === "cd /usr") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/usr</span></b>";
        } else if(input.value === "cd usr") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/usr</span></b>";
        } else if(input.value === "cd /boot/grub") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/boot/grub</span></b>";
        } else if(input.value === "cd boot/grub") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/boot/grub</span></b>";
        } else if(input.value === "cd /home/games") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Games</span></b>";
        } else if(input.value === "cd /home/Games") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Games</span></b>";
        } else if(input.value === "cd home/games") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Games</span></b>";
        } else if(input.value === "cd home/Games") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Games</span></b>";
        } else if(input.value === "cd home/documents/websites") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites</span></b>";
        } else if(input.value === "cd home/Documents/websites") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites</span></b>";
        } else if(input.value === "cd home/documents/websites/basic-html") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites/basic-html</span></b>";
        } else if(input.value === "cd home/Documents/websites/basic-html") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites/basic-html</span></b>";
        } else if(input.value === "cd /home/documents/websites") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites</span></b>";
        } else if(input.value === "cd /home/Documents/websites") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites</span></b>";
        } else if(input.value === "cd /home/documents/websites") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites/basic-html</span></b>";
        } else if(input.value === "cd /home/Documents/websites/basic-html") {
          input.value = "";
          text.innerHTML = "";
          user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites/basic-html</span></b>";
        } else {
          input.value = "";
          text.innerHTML = "That is not a command";
        } 
    } else if(user.textContent === "root@vm:~/bin") {
      if(input.value === "ls") {
        input.value = "";
        text.innerHTML = "bash.txt<br>log.txt<br>boot.txt<br>echo.txt<br>uname.txt";
      } else if(input.value === "bash.txt") {
        input.value = "";
        text.innerHTML = `1100001 1110101 1101010 1101001 1110111 1100100 1100111 1101000<br>
        1100110 1110101 1100001 1111001 1100110 1100101 110011 1100011 110010 110111 111000<br>
        1110100 1110010 1100010 1110111 1101001 111000 1100101 1110010 1100010 1100111 1100011<br>
        1110110 1110011 1111001 1110100 1100110 110111 1100111 1100010 110100 110110 1100010<br>
        1100011 1110100 1110010 1100111 110011 110111 1110101 110100 1110110 1100010 1100110<br>
        1110101 1100011 1100101 1100111 1110100 1110101 1100111 110011 1100101 1100010 1100110<br>
        1100011 110111 110011 1100100 110111 1100110 1100011 1100111 1100010 110011 1100101 110111<br>
        1100110 1100010 1100011 110110 1100111 110111 110100 1110010 1100111 1100110 110110<br>
        110011 110111 111000 1100011 110101 110100 1100110 1110110 111000 1110010 110111 110011<br> 
        1100010 110101 110100 1110110 1100110 1110010 1100011 111000 1100111 110011 110111 1110010<br>
        1110110 1100101 1100110 111000 1100111 1100011 1110111 1100101 1100110 1100010 1100111 110111<br>
        110110 110011 110100 1110110 1100010 1100011 110101 1100110 110011 110100 1100110 1100011<br>
        1110110 110111 1100111101000 1110001 110011 1100011 1110010 1101010 1110010 1101000 1100111<br>
        1101000 1110101 1100111 1100111 1110100 1111001 1100010 1110111 1100111 1100010 1110111 1100111<br>
        1100010 110111 1110100 1100111 1110111 1111001 1100110 110111 1100011 1100111 1100110 1111001 110111<br>
        1100100 1100011 1100110 1100111 1100111 1110111 1100111 1100011 1110010 110111 1100111 1110111 1100011<br>
        1111001 1100111 1110111 1110010 1100011 1111001 1100111 1110111 1110010 1100011 1111001 1100111 1100111<br>
        1110111 1110010 1111001 1100111 1110111 1110010 1111001 1100011 1100111 1110010 1111001 1110111 1100011<br>
        1110111 1100101 1110011 1110101 1100111 1101001 1100010 1100100 1100110 1110101 1111001 1100101 1101001<br>
        1110111 1100111 110111 1100010 1110100 1110010 111000 1110111 1100011 1110111 1100101 1100010 1100011<br>110111
        110100 110110 1100111 1110100 110111 1110111 1110010 1100110 1100111 1100100 1110100 1100011 1110111<br>1101010
        1101010 1111001 1101001 1110101 1100010 1100111 110100 1100110 1100011 110111 110011 110100 1100011<br>1110110
        1100110 110101 1110101 110111 1110010 1100010 1101010 1100111 1100101 110110 1100011 1110110 1100110<br>
        1110101 1110110 110111 110011 110100 1100110 1100111 1110111 1100101 1100111 1100110 1110111 1100100 1100110`;
      } else if(input.value === "log.txt") {
        input.value = "";
        text.innerHTML = `110010 111001 111000 110011 1110010 1111001 110010 111000<br>
        1100110 1110011 1100100 1101000 1101010 1100110 1100111 110010<br>
        110011 1110010 1101110 1110011 1100100 1111001 1100110 1110100<br>
        110111 110010 1100101 1100100 1100110 1101010 1100010 1110101<br>
        1111001 1110001 1110111 1110100 1100101 1110010 1110101 111001<br>
        1110111 1100011 1100111 110011 110111 1100011 1110100 1100110<br>
        1110011 110111 1110101 1101001 1110010 1110111 1110101 1100110<br>
        1110010 1110111 1100110 1110110 1100101 1111001 1100011 1100111<br>
        1110100 110111 110100 1100111 1100010 1100110 110101 100000<br>
        1110100 1111001 1110010 1100101 1100111 1100110 1111001 1101010<br>
        1110101 1110010 1110011 1100100 1100111 1100110 100000 1100011<br>
        1110101 1100101 1110111 1100010 1111001 1100110 100000 1100101<br>
        1110010 1111001 1110101 1101011 1100111 1100110 1101000 1100101<br>
        1110111 1110010 1101011 1110101 1111001 1100100 1110011 1110010<br>
        1111001 1110101 1100111 1100110 1100010 1110110 1110101 1110111<br>
        1101001 1111001 1100101 1110110 1110100 1100110 1100111 110111<br>
        1110101 1110111 1111001 1100111 1100110 1110110 1100010 1110101<br>
        1111001 1110111 1100101 1110010 1100111 1100110 1100010 1110110<br>
        1110111 1100101 1110101 110111 1101001 1110010 1111001 1100110<br>
        1100111 1110101 1110110 1110111 1100101 1100110 1100010 1100111<br>
        1110010 1110110 1110101 1110111 1100101 1100010 1110110 1100110<br>
        1100111 1110111 1110101 1100101 1101001 1100111 1111001 1100110<br>
        1110110 1100101 1110111 1101001 1110101 1110110 1100110 1110111<br>
        1110101 1111001 1100101 1110100 1100110 1100010 1100111 1110110<br>
        110111 1101001 1110111 1100101 1110110 1100010 1100110 1100111<br>
        110111 1110111 110110 1100100 1100111 1100110 1110111 1101001<br>
        1110101 1111001 1100110 1110110 1110111 1101001 111000 110110<br>
        1100101 1110110 1100110 1100111 1101001 1110111 110111 110110<br>
        1100101 1110110 110110 1100100 1100110 1100111 1101001 1111001<br>
        1110101 1110111 1100100 1100111 1100110 1110110 1100111 1101001<br>
        1100011 1101000 1100111 1110011 1100011 1100110 1110110 1110111<br>
        110100 1110100 110100 1110010 1100011 1110010 111000 110110<br>
        111000 1110100 110110 1110111 1100101 1110100 111000 110110<br>
        1100010 1100101 1100010 1110100 110110 111000 1100010 1100101<br>
        111000 1110111 110110 1110111 1100010 1100101 1110010 1110111<br>
        1110010 1110100 110110 1100010 1110111 1100101 1110100 110110<br>
        1100010 1100101 1110100 1100101 1110111 1110010 110110 1100011<br>
        1100010 1110100 110110 1100010 1110111 1100101 1100110 1100111<br>
        1110101 1101001 1111001`;
      } else if(input.value === "boot.txt") {
        input.value = "";
        text.innerHTML = `1100001 1101001 1100001 1110101 1100001 1101110 1100010 1110101 1100101 1111001<br>
        1110100 1110011 1101110 1100010 1101010 1101111 1110001 1110101 1110010 1100010<br>
        1101110 1100110 1101110 1110011 1101111 1100010 1101110 1100010 1100101 1110010<br>
        1110101 1111001 1100100 1101110 1100010 1110000 1100001 1100100 1101100 1110010<br>
        1100111 1101001 1110010 1100010 1101110 1100110 1101011 1100010 1101110 1100100<br>
        1101001 1100010 1101001 1100101 1101000 1101110 1100111 1101001 1110101 1100100<br>
        1100110 1101001 1110011 1100100 1101001 1110101 1100111 1100110 1101000 1100111<br>
        1110101 1111001 1100101 1110010 100000 1110010 1110011 1110101 1101000 1101110<br>
        1110110 110000 1100001 1101000 110100 1110101 1100110 1101110 1111000 111001<br>
        1101111 1110111 1101000 1110110 1100011 1101001 110100 1101000 1100110 1101000<br>
        1100011 1101001 1100001 1101110 1100011 1110101 1100010 110100 1100010 1100100<br>
        1110101 1100100 1100010 1100011 1100001 1101111 1100111 1110000 1100010 1101110<br>
        1100101 1101001 1100011 1100010 1100010 1110101 110011 1110101 1110011 1100010<br>
        1101110 1111000 1101000 1101110 110011 110100 1110101 1110110 1100010 1100101<br>
        1110101 1111000 1100010 1101111 1100001 1100010 1110110 1100110 1110101 1110111<br>
        1100101 1110101 1100001 1110011 1100100 1100010 1100110 1101001 1111001 1100010<br>
        1100101 1100010 1100111 1101001 1100101 1100110 1101001 1100010 1110101 1100100<br>
        1101010 1101011 1100110 1100111 1110101 110010 110011 1100101 1100111 1100100<br>
        1110101 1101001 1100001 1100010 1110011 1100001 1101001 1110101 1100111 1100010<br>
        1100101 1100110 1111001 1100001 1100010 1110011 1100011 1100010 1111001 1110110<br>
        1100010 110010 1111001 1100111 1100100 1110110 1100010 1111001 1110110 1101111<br>
        1100001 1110011 1101110 1100011 1100001 1101111 1111000 1111000 1101000 1111000<br>
        1111000 1111000 1101000 1101110 1101001 1111001 1110111 1101000 1100101 1100110<br>
        1111001 1110011 1100100 1100110 1111001 1100111 111000 110001 110011 1110100 1100001<br>
        1101010 1101110 1110011 1100100`;
      } else if(input.value === "echo.txt") {
        input.value = "";
        text.innerHTML = `110001 111001 110111 110011<br>
        110100 110110 110010 111000<br>
        110111 110011 110100 110110<br>
        110010 111000 110011 110101<br>
        111001 110001 110110 110101<br>
        110111 111001 110101 110100<br>
        110110 111001 110010 110011<br>
        110101 110100 110110 110010<br>
        111001 110011 110101 110100<br>
        110110 110010 111001 110011<br>
        110100 110101 110110 110010<br>
        110011 111001 110101 110100<br>
        110110 110010 110011 110100<br>
        111001 111000 110110 110000<br>
        110001 110010 111000 110011<br>
        110101 110000 110011 110001<br>
        110010 110111 110101 110011<br>
        111000 110001 110010 111001<br>
        110100 110101 110110 110001<br>
        110011 110100 110010 110101<br>
        110110 111001 110001 110101<br>
        110011 110100 110000 110001<br>
        110110 110101 111000 110100<br>
        110001 110011 111001 110100<br>
        110101 110110 111001 110010<br>
        110011 110100 110101 110111<br>
        110110 110100 111001 110111<br>
        110100 110110 110010 111000<br>
        110111 110011 110100 110110<br>
        110010 111000 110011 110101<br>
        111001 110001 110110 110101<br>
        110111 111001 110101 110100<br>
        110110 111001 110010 110011<br>
        110101 110100 110110 110010<br>
        111001 110011 110101 110100<br>
        110110 110010 111001 110011<br>
        110100 110101 110110 110010<br>
        110011 111001 110101 110100<br>
        110110 110010 110011 110100<br>
        111001 111000 110110 110000<br>
        110001 110010 111000 110011<br>
        110101 110000 110011 110001<br>
        110010 110111 110101 110011<br>
        111000 110001 110010 111001<br>
        110100 110101 110110 110001<br>
        110011 110100 110010 110101<br>
        110110 111001 110001 110101<br>
        110011 110100 110000 110001<br>
        110110 110101 111000 110100<br>
        110001 110011 111001 110100<br>
        110101 110110 111001 110010<br>
        110011 110100 110101 110111<br>
        110110 110100 111001 110111`;
      } else if(input.value === "uname.txt") {
        input.value = "";
        text.innerHTML = `110001 111001 110111 110011 110100<br>
        110110 110010 111000 110111 110011<br>
        110100 110110 110010 111000 110011<br>
        110101 111001 110001 110110 110101<br>
        110111 111001 110101 110100 110110<br>
        111001 110010 110011 110101 110100<br>
        110110 110010 111001 110011 110101<br>
        110100 110110 110010 111001 110011<br>
        110100 110101 110110 110010 110011<br>
        111001 110101 110100 110110 110010<br>
        110011 110100 111001 111000 110110<br>
        110000 110001 110010 111000 110011<br>
        110101 110000 110011 110001 110010<br>
        110111 110101 110011 111000 110001<br>
        110010 111001 110100 110101 110110<br>
        110001 110011 110100 110010 110101<br>
        110110 111001 110001 110101 110011<br>
        110100 110000 110001 110110 110101<br>
        111000 110100 110001 110011 111001<br>
        110100 110101 110110 111001 110010<br>
        110011 110100 110101 110111 110110<br>
        110100 111001 110111 110001 110011<br>
        111000 110101 110100 111001 110011<br>
        110001 110010 110100 110101 110101<br>
        110001 111000 110010 110011 110101<br>
        110100 111001 111000 110101 110100<br>
        110001 111001 110000 111000 110010<br> 
        110101 110011 110100 110001 110101<br>
        110101 110010 110001 110110 110101<br>
        110010 110001 110100 110101 110001<br>
        110010 110010 110101 110110 110101<br>
        110100 110001 110010 110110 110111<br>
        110101 110100 110001 110101 110100<br>
        110010 110110 110111 111000 110001<br>
        110010 110101 110100 110011 110101`;
      } else if(input.value === "cd -") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/</span></b>";
      } else {
        input.value = "";
        text.innerHTML = "That is not a command!";
      }
    } else if(user.textContent === "root@vm:~/boot") {
      if(input.value === "ls") {
        input.value = "";
        text.innerHTML = "vmlinuz-5.15.0-84-generic<br>initrd.img-5.15.0-84-generic<br>System.map-*<br>config-*<br>/grub";
      } else if(input.value === "vmlinuz-5.15.0-84-generic") {
        input.value = "";
        text.innerHTML = utof;
      } else if(input.value === "initrd.img-5.15.0-84-generic") {
        input.value = "";
        text.innerHTML = utof;
      } else if(input.value === "System.map-*") {
        input.value = "";
        text.innerHTML = utof;
      } else if(input.value === "system.map-*") {
        input.value = "";
        text.innerHTML = utof;
      } else if(input.value === "config-*") {
        input.value = "";
        text.innerHTML = utof;
      } else if(input.value === "cd /grub") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/boot/grub</span></b>";
      } else if(input.value === "cd grub")  {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/boot/grub</span></b>";
      } else if(input.value === "cd -") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/</span></b>";
      } else {
        input.value = "";
        text.innerHTML = "That is not a command";
      }
    } else if(user.textContent === "root@vm:~/boot/grub") {
      if(input.value === "cd -") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/boot</span></b>";
      } else if(input.value === "ls") {
        input.value = "";
        text.innerHTML = "grub.cfg<br>grubenv";
      } else if(input.value === "grub.cfg") {
        input.value = "";
        text.innerHTML = "GRUB is already configured";
      } else if(input.value === "grubenv") {
        input.value = "";
        text.innerHTML = "saved_entry=0<br>boot_success=1<br>next_entry=2<br>timeout=5<br>";
      } else {
        input.value = "";
        text.innerHTML = "That is not a command";
      }
    } else if(user.textContent === "root@vm:~/home") {
      if(input.value === "cd -") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/</span></b>";
      } else if(input.value === "ls") {
        input.value = "";
        text.innerHTML = "/Documents<br>/Games";
      } else if(input.value === "cd /Documents") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents</span></b>";
      } else if(input.value === "cd /documents") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents</span></b>";
      } else if(input.value === "cd Documents") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents</span></b>";
      } else if(input.value === "cd documents") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents</span></b>";
      } else if(input.value === "cd /Games") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Games</span></b>";
      } else if(input.value === "cd /games") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Games</span></b>";
      } else if(input.value === "cd Games") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Games</span></b>";
      } else if(input.value === "cd games") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Games</span></b>";
      } else if(input.value === "cd documents/websites") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites</span></b>";
      } else if(input.value === "cd Documents/websites") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites</span></b>";
      } else if(input.value === "cd documents/websites/basic-html") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites/basic-html</span></b>";
      } else if(input.value === "cd Documents/websites/basic-html") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites/basic-html</span></b>";
      } else {
        input.value = "";
        text.innerHTML = "That is not a command";
      }
    } else if(user.textContent === "root@vm:~/home/Documents") {
      if(input.value === "ls") {
        input.value = "";
        text.innerHTML = "/websites<br>bank-info.txt";
      } else if(input.value === "cd -") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home</span></b>";
      } else if(input.value === "bank-info.txt") {
        input.value = "";
        text.innerHTML = `Credit card number: ${randomCreditCardNum}`;
      } else if(input.value === "cd websites") {
        input.value = "";
        text.innerHTML = "";
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites</span></b>";
      } else if(input.value === "cd /websites") {
        input.value = "";
        text.innerHTML = "/basic-html";
      } else if(input.value === "cd websites/basic-html") {
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites/basic-html</span></b>";
        input.value = "";
        text.innerHTML = "";
      } else {
        input.value = "";
        text.innerHTML = "That is not a command.";
      }
    } else if(user.textContent === "root@vm:~/home/Documents/websites") {
      if(input.value === "ls") {
        input.value = "";
        text.innerHTML = "/basic-html";
      } else if(input.value === "cd basic-html") {
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites/basic-html</span></b>";
        input.value = "";
        text.innerHTML = "";
      } else if(input.value === "cd /basic-html") {
        user.innerHTMl = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites/basic-html</span></b>";
        input.value = "";
        text.innerHTML = "";
      } else if(input.value === "cd -") {
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents</span></b>";
        input.value = "";
        text.innerHTML = "";
      } else {
        input.value = "";
        text.innerHTML = "That is not a command";
      }
    } else if(user.textContent === "root@vm:~/home/Documents/websites/basic-html") {
      if(input.value === "cd -") {
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home/Documents/websites</span></b>";
        input.value = "";
        text.innerHTML = "";
      } else if(input.value === "ls") {
        input.value = "";
        text.innerHTML = "index.html";
      } else if(input.value === "index.html") {
        webOn('basic-html');
        input.value = "";
        text.innerHTML = "";
      } else {
        input.value = "";
        text.innerHTML = "That is not a command";
      }
    } else if(user.textContent === "root@vm:~/home/Games") {
      if(input.value === "cd -") {
        user.innerHTML = "<b>root<span class='purple'>@vm:</span><span class='gray'>~/home</span></b>";
        input.value = "";
        text.innerHTML = "";
      } else if(input.value === "ls") {
        input.value = "";
        text.innerHTML = "pong.exe";
      } else if(input.value === "pong.exe") {
        window.open("other/pong.html", "pongWindow","width=800, height=600");
        input.value = "";
        text.innerHTML = "";
      } else {
        input.value = "";
        text.innerHTML = "That is not a command";
      }
    } 
    
    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        const inputValue = input.value.trim();
        if (inputValue.startsWith("nt ") && inputValue.length > 3) {
          const domain = inputValue.substring(3).trim();
          if (domain.includes(".")) {
            location.href = `https://${domain}`;
            input.value = "";
          } else {
            text.innerHTML = "That is not a valid domain.";
          }
        } else {
          text.innerHTML = "That is not a command";
        }
      }
    });
    
}

function webOn(id) {
  var divText = document.getElementById(id).outerHTML;
  popup = window.open('', '', 'width=600,height=450');
  var doc = popup.document;
  doc.open();
  doc.write(divText);
  doc.close();
}

document.getElementById("cover").onclick = function() {
  document.getElementById("input").focus();
}
