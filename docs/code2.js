gdjs.WelcomeSceneCode = {};
gdjs.WelcomeSceneCode.GDChromoCapture_9595TitleObjects1= [];
gdjs.WelcomeSceneCode.GDChromoCapture_9595TitleObjects2= [];
gdjs.WelcomeSceneCode.GDBody_9595textObjects1= [];
gdjs.WelcomeSceneCode.GDBody_9595textObjects2= [];
gdjs.WelcomeSceneCode.GDChromoCapture_9595subTitleObjects1= [];
gdjs.WelcomeSceneCode.GDChromoCapture_9595subTitleObjects2= [];
gdjs.WelcomeSceneCode.GDNewSpriteObjects1= [];
gdjs.WelcomeSceneCode.GDNewSpriteObjects2= [];
gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects1= [];
gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects2= [];
gdjs.WelcomeSceneCode.GDCrochetObjects1= [];
gdjs.WelcomeSceneCode.GDCrochetObjects2= [];
gdjs.WelcomeSceneCode.GDADNObjects1= [];
gdjs.WelcomeSceneCode.GDADNObjects2= [];
gdjs.WelcomeSceneCode.GDOligosObjects1= [];
gdjs.WelcomeSceneCode.GDOligosObjects2= [];
gdjs.WelcomeSceneCode.GDChromosomesObjects1= [];
gdjs.WelcomeSceneCode.GDChromosomesObjects2= [];
gdjs.WelcomeSceneCode.GDCytokinesObjects1= [];
gdjs.WelcomeSceneCode.GDCytokinesObjects2= [];
gdjs.WelcomeSceneCode.GDNewTextObjects1= [];
gdjs.WelcomeSceneCode.GDNewTextObjects2= [];
gdjs.WelcomeSceneCode.GDKillerObjects1= [];
gdjs.WelcomeSceneCode.GDKillerObjects2= [];
gdjs.WelcomeSceneCode.GDNewText2Objects1= [];
gdjs.WelcomeSceneCode.GDNewText2Objects2= [];
gdjs.WelcomeSceneCode.GDChromo_9595CytokinesObjects1= [];
gdjs.WelcomeSceneCode.GDChromo_9595CytokinesObjects2= [];
gdjs.WelcomeSceneCode.GDChromo_9595FishingHookObjects1= [];
gdjs.WelcomeSceneCode.GDChromo_9595FishingHookObjects2= [];
gdjs.WelcomeSceneCode.GDChromo_9595OligomersObjects1= [];
gdjs.WelcomeSceneCode.GDChromo_9595OligomersObjects2= [];
gdjs.WelcomeSceneCode.GDChromo_9595DNAObjects1= [];
gdjs.WelcomeSceneCode.GDChromo_9595DNAObjects2= [];
gdjs.WelcomeSceneCode.GDChromo_9595DNA2Objects1= [];
gdjs.WelcomeSceneCode.GDChromo_9595DNA2Objects2= [];
gdjs.WelcomeSceneCode.GDChromo_9595Dna2Objects1= [];
gdjs.WelcomeSceneCode.GDChromo_9595Dna2Objects2= [];
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome_95951Objects1= [];
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome_95951Objects2= [];
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome_95952Objects1= [];
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome_95952Objects2= [];
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome3Objects1= [];
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome3Objects2= [];


gdjs.WelcomeSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chromo_Cytokines"), gdjs.WelcomeSceneCode.GDChromo_9595CytokinesObjects1);
{for(var i = 0, len = gdjs.WelcomeSceneCode.GDChromo_9595CytokinesObjects1.length ;i < len;++i) {
    gdjs.WelcomeSceneCode.GDChromo_9595CytokinesObjects1[i].setCenterPositionInScene(0,0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowJellyButton"), gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects1.length;i<l;++i) {
    if ( gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects1[k] = gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects1[i];
        ++k;
    }
}
gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.WelcomeSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WelcomeSceneCode.GDChromoCapture_9595TitleObjects1.length = 0;
gdjs.WelcomeSceneCode.GDChromoCapture_9595TitleObjects2.length = 0;
gdjs.WelcomeSceneCode.GDBody_9595textObjects1.length = 0;
gdjs.WelcomeSceneCode.GDBody_9595textObjects2.length = 0;
gdjs.WelcomeSceneCode.GDChromoCapture_9595subTitleObjects1.length = 0;
gdjs.WelcomeSceneCode.GDChromoCapture_9595subTitleObjects2.length = 0;
gdjs.WelcomeSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.WelcomeSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.WelcomeSceneCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.WelcomeSceneCode.GDCrochetObjects1.length = 0;
gdjs.WelcomeSceneCode.GDCrochetObjects2.length = 0;
gdjs.WelcomeSceneCode.GDADNObjects1.length = 0;
gdjs.WelcomeSceneCode.GDADNObjects2.length = 0;
gdjs.WelcomeSceneCode.GDOligosObjects1.length = 0;
gdjs.WelcomeSceneCode.GDOligosObjects2.length = 0;
gdjs.WelcomeSceneCode.GDChromosomesObjects1.length = 0;
gdjs.WelcomeSceneCode.GDChromosomesObjects2.length = 0;
gdjs.WelcomeSceneCode.GDCytokinesObjects1.length = 0;
gdjs.WelcomeSceneCode.GDCytokinesObjects2.length = 0;
gdjs.WelcomeSceneCode.GDNewTextObjects1.length = 0;
gdjs.WelcomeSceneCode.GDNewTextObjects2.length = 0;
gdjs.WelcomeSceneCode.GDKillerObjects1.length = 0;
gdjs.WelcomeSceneCode.GDKillerObjects2.length = 0;
gdjs.WelcomeSceneCode.GDNewText2Objects1.length = 0;
gdjs.WelcomeSceneCode.GDNewText2Objects2.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595CytokinesObjects1.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595CytokinesObjects2.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595FishingHookObjects1.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595FishingHookObjects2.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595OligomersObjects1.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595OligomersObjects2.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595DNAObjects1.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595DNAObjects2.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595DNA2Objects1.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595DNA2Objects2.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595Dna2Objects1.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595Dna2Objects2.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome_95951Objects1.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome_95951Objects2.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome_95952Objects1.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome_95952Objects2.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome3Objects1.length = 0;
gdjs.WelcomeSceneCode.GDChromo_9595Chromosome3Objects2.length = 0;

gdjs.WelcomeSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['WelcomeSceneCode'] = gdjs.WelcomeSceneCode;
