



function printData(data,country){
  
    for(let i=0;i<data.length;i++){
      
        let name= String(data[i].name);
        console.log(name, country);
        let region = data[i].region;
        let capital = data[i].capital;
        let img= String(data[i].flags.png);
        
        
        // let image = document.createElement('img');
        // image.src  = flag;
        // document.querySelector('.container').appendChild(image);
    
        let url_temp = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7ae326a7b1cfa067b29e76c1850b3397` ;
        
        fetch(url_temp,{
      
        })
          .then((data) => data.json())
          .then((response) => {
            
            
            
            printTemp(name, region, capital, img, response);
            // let w1 = document.createElement("p");
            // w1.innerHTML="Temperature: "+temp;
    
            
            
          })
          .catch((error) => {
            console.log("This Country's data is not available");
    
          });
        
        }
    }
    
    
    function printTemp(name,region,capital,img,response){
      // let image= document.createElement("img");
      // image.src=img;
      // document.body,.appendChild(image);  
      // console.log(img);
      // let cap = document.createElement("p");
      //   cap.innerHTML=name+" "+region +" " +capital;
      //   document.body.appendChild(cap);
      document.getElementById("country_img").onerror="";
        document.getElementById("country_img").src=img;
        document.getElementById("C_name").innerHTML  = name;
        document.getElementById("c_info").innerHTML  ="Region: " + region + "<br />" + "Capital: "+capital;
        
      let disp=  response.weather[0].description;
          console.log(disp);
      let temp = String(response.main.temp);
      console.log(temp);
      //   let w2 = document.createElement("p");
      //       w2.innerHTML=JSON.stringify(disp);
    
      //       document.body.appendChild(w2);
      document.getElementById("t_info").innerHTML  = "Temperature: " +temp + " K"+"<br />" +disp;
     
      
        // <img src="" id= "country_img" class="card-img" alt="Country Image"></img>
    
    
    
    }
    
    
        
       let country= (url_country,name) => {fetch(url_country,{
          
            })
              .then((data) => data.json())
              .then((response) => {
                console.log(response)
                console.log("This works");
                printData(response);
          
              })
              .catch((error) => {
                console.log(error);
              });
            }
    
    
     
    document.getElementById("btn").addEventListener("click", function () {
      //
      let name = String(document.getElementById("country").value);
      let url_country = `https://restcountries.com/v2/name/${name}`;
      country(url_country,name);
      
    
    
    });
    
    
     
      