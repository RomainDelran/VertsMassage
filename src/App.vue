<template>




<div class="fondEcran">


  <div class="centerAlign">

    <nav>
            
    
    
    
          <img v-if="menuMasque" src="./assets/ArbreMenu2.png" class="feuilleMenu">
    
    
          <a @click="actionBoutonMenuMasque"  >
          <button  class=" boutonMasquerLeMenu" 
                type="button" >
                {{nomMenuMasque}}
          </button>
          </a> 
    
    
          <router-link  to="/" >
          <button  v-if="menuMasque" class="button boutonAcceuil"
                type="button">
                <img src="./assets/FeuilleBouton.png" class="FeuilleBoutonAccueil">
            Accueil 
          </button>
        </router-link>
    
        <router-link to="/Presentation">
            <button v-if="menuMasque" class="button boutonPresentation"
                type="button" >
                <img src="./assets/FeuilleBouton.png" class="FeuilleBoutonPresentation">
            Présentation
          </button>
        </router-link>
    
        <router-link to="/PrestationTarifs">
            <button v-if="menuMasque" class="button boutonTarifs"
                type="button">
                <img src="./assets/FeuilleBouton.png" class="FeuilleBoutonTarifs">
            Prestations et Tarifs
          </button>
        </router-link>
    
        <router-link to="/Contact">
            <button v-if="menuMasque" class="button boutonContact"
                type="button">
                <img src="./assets/FeuilleBouton.png" class="FeuilleBoutonContact">
            Contact
          </button>
        </router-link>
    
        


    </nav>
  </div>



    <router-view/>

  
</div>

</template>



<script>

export default {
	name: 'App',
 
  data: ()=> ({
    menuMasque: true,
    nomMenuMasque: "Masquer le menu"
  }),
	components: {
		
	},
  methods: {
        actionBoutonMenuMasque: function () {
          if (this.menuMasque) {
           this.nomMenuMasque = "Afficher le menu"
            this.menuMasque = false 
          }
           else 
           {
            this.menuMasque = true 
            this.nomMenuMasque = "Masquer le menu"
           }
        
        }
    }
}
  

  
  </script>




<style>



@import url('//db.onlinewebfonts.com/c/a0e1b1883c0cf520e9c50d0cd91cd0d0?family=PapyrusW01');
@import url('http://fonts.cdnfonts.com/css/palatino');

/*style de Prestaion et tarifs*/
.TitreMassageCaliforniens{
  font-size: 3em;
  color: #000;
}


 .BlancContenuPrestationTarifs{
    display: flex;
    
    align-items: center;
    justify-content: center;
  
  
  }
  
  .contenuPrestationTarifs{
    width:  80%;
    margin-bottom: 4em;
    padding: 2em 2em 2em 0em;
    background-color: #ffffff9c;
    border-radius: 2em;
    border: 0.15em solid black;
  }


  .TexteContenuPrestationTarifs{
    font-family: 'Comic Neue', cursive;
  }
/*fin Prestaion et tarifs*/


/*presentation*/

.TitrePresentation{
  font-family:'Papyrus', sans-serif;
    text-align: start;
    font-size: 2em;
    color: #ffffff;
    text-shadow: 0 0 1px rgb(0, 0, 0);
    margin: 2em;

}


  
  .BlancContenuPresentation{
    display: flex;
    
    align-items: center;
    justify-content: center;
  
  
  }
  
  .contenuPresentation{
    width:  80%;
    margin-bottom: 4em;
    
    background-color: #ffffff9c;
    border-radius: 2em;
    border: 0.15em solid black;
  }
  

  
  

  
  .conteneurTexteLogo{
    
    left: 0.8em;
    padding-top:0em ;
  }
  

  
  .texteLogoPetit{
    font-size: 0.8em;
  }
  
  .telephoneAcceuil{
    color:#ffffff;
    text-shadow: 0 0 1px rgb(0, 0, 0);
  }
  
  
  
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
/*fin presentation*/
    
.CouleurVert{
  color: #000000;
  
}

.CouleurVertClaire{
  color: #000000;
  
}

.CouleurBlanc{
  color: #ffffff;
  text-shadow: 0 0 1px rgb(0, 0, 0)
}

.CouleurRouge{
  color: #000000;
  /*text-shadow: 0 0 1px rgb(0, 0, 0)*/
}

.PaddingEtMargin0{
  margin: 0em;
  padding: 0em;
}

.azure{
  color: #0abaff;
  text-shadow: 0 0 1px rgb(0, 0, 0)
  }

.TexteContenuPresentation{
  padding: 2em 2em 2em 2em;
  font-size: 1.5em;
  color: #000000;
}
    
.TexteBasique{
  font-size: 1.6em;
  color: #000000;
}

.TextePapyrusse{
  font-family:'Papyrus', sans-serif;
}

.TexteSize2-5em{
  font-size: 2.5em;
}

.TexteSize1-9em{
  font-size: 1.9em;
}

.margin0{
  margin: 0;
}
.marginBottom0{
  margin-bottom: 0em;
}
    
.PaddingChoix{
  padding-left: 1em;
  padding-top: 0em;
}
    
    body{
      /*font-family: 'Roboto Condensed', sans-serif; 
      font-family: 'MV Boli', sans-serif;   'MV Boli' */
      font-family: 'Palatino', sans-serif;
      
    }
    
    .texteLogo{
    font-family:'Papyrus', sans-serif;
    text-align: start;
    font-size: 2em;
    color: #ffffff;
    text-shadow: 0 0 1px rgb(0, 0, 0);
    margin: 0.5em;
  }


    

    .VertsMassagesLogo{
    
    font-family:'Papyrus', sans-serif;
  
    display: flex;
    font-size: 4.5em;
    color: #7fed7c;
    margin-left: 0.8em;
    
  
  }

    .VertsMassagesLogoAccueil{
    
    font-family:'Papyrus', sans-serif;
    justify-content: center;
    display: flex;
    font-size: 7em;
    color: #7fed7c;
    
    text-shadow: 0 0 1px rgb(0, 0, 0);
  margin-top: 2em;
  }


    .TitrePresentation{
    font-family:'Papyrus', sans-serif;
    text-align: start;
    font-size: 2em;
    color: #ffffff;
    text-shadow: 0 0 1px rgb(0, 0, 0);
    margin: 2em;

}

.centerAlign{
  align-items: center;
  position:fixed;
  width: 50em;
}
    
nav{
      
      position: relative;
      
      width: 45em;
      margin-right: 0em;
      padding:0em ;
      top: 0em;
      left:30em;
    }
    



    
.fondEcran{
        margin: 0em;
        padding: 0em;
    /*    align-items: center;
        justify-content: center; */
        right: 0em;
    
        background-image:url("~@/assets/FondEcran.jpg");
        background-attachment: fixed;
        
        
    
    
        background-repeat: no-repeat;
        background-size: 100em;
        background-position: center;
        
       z-index: 11;
        
    }
    
    .button{
    font-family: 'Palatino', cursive;
    font-weight: bold;
    font-size: 1.4em;
    background: #00000000;
    border: #000000;
   
        
        padding: 1em 2em 1em 2em;
        color: #700086;
        z-index: 2;
        
    }
    
    .boutonMasquerLeMenu{
      
    background-color: #00000050;
        border: 0.15em solid #000000;
        border-radius: 1em;
        padding: 0.5em 1em 0.5em 1em;
        color: rgb(255, 255, 255);

       position: absolute;
       right:02em ;
       top: 01em;
       cursor : pointer;
    }
    
    .feuilleMenu{
      position: absolute;
       right:0em ;
      width: 100%;
      z-index: -2;
      
    }



    .FeuilleBoutonAccueil{
      position: absolute;
      z-index: -1;
      right: -1.5em;
      top: -0.2em;
      height: 3.7em;
      cursor : pointer;
    }
    
    .FeuilleBoutonPresentation{
      position: absolute;
      z-index: -1;
      right: -0em;
      top: -0.2em;
      height: 3.7em;
      cursor : pointer;
    }

    .FeuilleBoutonTarifs{
      position: absolute;
      z-index: -1;
      right: 1em;
      top: -0.2em;
      height: 3.7em;
      width: 11.5em;
      cursor : pointer;

    }

    .FeuilleBoutonContact{
      position: absolute;
      z-index: -1;
      right: -1.2em;
      top: -0.2em;
      height: 3.7em;
      cursor : pointer;
      
    }

    
    .boutonAcceuil{
      position: absolute;
       right:025em ;
       top: 01em;
       cursor : pointer;
    }
    
    .boutonPresentation{
      position: absolute;
       right:012em ;
       top: 00.5em;
       cursor : pointer;
    }
    
    .boutonTarifs{
      position: absolute;
       right:01em ;
       top: 4.5em;
       cursor : pointer;
    }
    
    .boutonContact{
      position: absolute;
       right:2em ;
       top: 010em;
       cursor : pointer;
    }
    

    
    
    #app {
      font-family:'Palatino', cursive, Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #502c37;
      margin-top: 0em;
      margin-bottom: 0em;
     right: 0em;
      display: flex;
        align-items: center;
        justify-content: center;
    
        width: 75em;
    }
    
    body{
      
      display: flex;
        align-items: center;
        justify-content: center;
      margin-top: 0em;
      margin-bottom: 0em;
    }

    .hello{
  width: 75em;
}


</style>
