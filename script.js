const  coração  =  documento . querySelectorAll ( "[data-icon='icon']" ) ;

const  clickHeart  =  ( e )  =>  e . alvo . classList . alternar ( "ativar" ) ;
coração . forEach ( ( ícone )  =>  ícone.addEventListener ( " clique " , cliqueCoração ) ) ; 