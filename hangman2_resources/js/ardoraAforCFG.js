//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage="YOU FAILED END OF THE GAME"; scoPtos=10;
var fMenssage="'Arial Black', Gadget, sans-serif";
var fActi="Copperplate / Copperplate Gothic Light, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="CONGRATULATIONS YOU ARE WINNER"; messageTime=""; messageError="YOU FAILED TRY AGAIN"; messageErrorG="YOU FAILED TRY AGAIN"; messageAttempts="YOU FAILED END OF THE GAME"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#4A39E6"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aGFuZ21hbjI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["QklMTCBPRiBMQURJTkc=","Q09OU0lHTkVF","QUlSIFdBWUJJTEw=","Q1VTVE9NUw==","Q0VSVElGSUNBVEUgT0YgT1JJR0lO","RlVMTCBDT05UQUlORVIgTE9BRA==","RlJFRSBUUkFERSBBR1JFRU1FTlQ=","R0xPQkFMIEZSRUlHSFQgRk9SV0FSREVS","SU5URVJOQVRJT05BTCBDT01NRVJDSUFMIEFHRU5DWSBDT05UUkFDVA==","TEVTUyBUSEFOIENPTlRBSU5FUiBMT0FE"];imaW=["","","","","","","","","",""];queW=["No es otra cosa que un documento propio de los contratos del transporte marítimo (maritime transport) que hace referencia al envío de mercancías mediante buques en línea regular.","Se refiere a la persona, entidad o empresa a la que se le consigna una mercancía.","Es una especie de recibo para el remitente que es emitido por la aerolínea a cargo o, en su defecto, por el consolidador.","Las oficinas públicas del Estado que se sitúan en las fronteras en puertos y aeropuertos","Es aquel documento que permite, tanto a importadores (importers) como a exportadores (exporters), acreditar el país o la región de proveniencia de cada mercancía.","Un contenedor lleno de mercancía de una misma remesa perteneciente a un solo exportador o importador.","Es un acuerdo comercial de bienes y servicios al que se suscriben dos o más países para así estipular una concesión mutua de preferencias arancelarias","Persona encargada de actuar como intermediaria entre el exportador/importador y el transportista directo.","Un contrato mediante cual se garantiza la distribución e inserción de mercancías en distintos países y en países terceros mediante la ayuda de empresas extranjeras.","Embarque de carga que resulta insuficiente para llenar un contenedor de carga entero."];var wordsL=[14,9,11,7,21,19,20,24,40,24];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=500; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="hangman2_resources/media/"; textBNext="NEXT";
