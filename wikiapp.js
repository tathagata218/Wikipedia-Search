$(function(){
    $("#searchResult").hide();
    //Cross button Code
      $("#writesearch").on("input",function(){
        var a= $(this).val();
       if (a.length>0) {
         $("#search").prop("disabled",false); 
        $("#crossbtn").click(function(){
      $("#writesearch").val("");
       $("#search").prop("disabled",true);   
    });
       }
      else {$("#search").prop("disabled",true);}  
      
      });
    //Cross button Code
    
    //Search Button Code
      
     $("#search").click(function() {
      
     var searchTerm=$("#writesearch").val();
      
      var link="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+searchTerm+"&namespace=0&limit=10&callback=?";
          $.getJSON(link, function(data){
           var contData=data[1].length;
            if (contData>0){
              $("#content").fadeOut(300);
              $("#searchResult").fadeIn(300);}
            else{alert("NO RESULT FOUND");}
            
            for (var i =0; i<contData;i++){
                 
          $("#info").prepend('<li id="listItem" class="searchLinks"><a target="_blank" href='+data[3][i]+'><h4>'+data[1][i]+'</h4><p>'+data[2][i]+'</p></a></li>');
        } 
         
          });
      });
      
       $("#writesearch").keyup(function(event){
         if (event.keyCode==13){
           $("#search").click();
         }
       });
    //Search Button Code  
      
      
      
      //Random Search Code 
    $("#randsearch").click(function(){
       
      var link2="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&grnlimit=10&callback=?";
      $.getJSON(link2, function(event) {
       
        
         $("#content").fadeOut(300);
      
        for (var k=0; k < Object.keys(event.query.pages).length; k++) {
          var item = Object.values(event.query.pages)[k].title;
        
          var link3="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+item+"&namespace=0&limit=1&callback=?";
          $.getJSON(link3,function(data){
             $("#searchResult").fadeIn(300);
             $("#info").prepend('<li id="listItem2" class="searchLinks"><a target="_blank" href='+data[3]+'><h4>'+data[1]+'</h4><p>'+data[2]+'</p></a></li>');
          
          
        
          }); 
            
            
        
        }
        
        
      });
      
      
    });
    //Random Search code
    $("#refresh").click(function(){
      $("#content").fadeIn();     
      $("li").remove();
      $("#searchResult").hide();
          
            });
      
      $("#refresh2").click(function(){
        $("#content").fadeIn();   
        $("li").remove();
        $("#searchResult").hide();
        });
    
    });
    //