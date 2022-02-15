/**
 * @file country.constants
 * @module country.constants
 * @description Contains many re-usable country constants.
 * @requires module:basic.constants
 * @requires module:phonic.constants
 * @requires module:numeric.constants
 * @requires module:generic.constants
 * @requires module:unit.constants
 * @requires module:word1.constants
 * @author Seth Hollingsead
 * @date 2021/11/15
 * @copyright Copyright © 2021-… by Seth Hollingsead. All rights reserved
 */

import * as bas from './basic.constants.js';
import * as con from './constant.constants.js';
import * as phn from './phonic.constants.js';
import * as num from './numeric.constants.js';
import * as gen from './generic.constants.js';
import * as unt from './unit.constants.js';
import * as wr1 from './word1.constants.js';

// Countries
export const cAfghanistan = bas.cAf + bas.cgh + bas.can + phn.cistan; // Afghanistan
export const cAlbania = bas.cAl + bas.cba + phn.cnia; // Albania
export const cAlgeria = bas.cAl + phn.cgeria; // Algeria
export const cAndorra = wr1.cAnd + bas.cor + bas.cra; // Andorra
export const cAngola = bas.cAn + bas.cgo + bas.cla; // Angola
export const cAntigua = bas.cAn + bas.cti + phn.cgua; // Antigua
export const cArgentina = gen.cArg + phn.cent + phn.cina; // Argentina
export const cArmenia = bas.cAr + phn.cmen + bas.cia; // Armenia
export const cAustralia = bas.cAu + bas.cst + phn.cral + bas.cia; // Australia
export const cAustria = bas.cAu + bas.cst + phn.cria; // Austria
export const cAzerbaijan = bas.cAz + bas.cer + bas.cba + bas.cij + bas.can; // Azerbaijan
export const cBahamas = bas.cBa + bas.cha + phn.cmas; // Bahamas
export const cBahrain = bas.cBa + bas.chr + phn.cain; // Bahrain
export const cBangladesh = bas.cBa + bas.cng + bas.cla + bas.cde + bas.csh; // Bangladesh
export const cBarbados = bas.cBa + bas.crb + wr1.c1a1d + bas.cos; // Barbados
export const cBarbuda = bas.cBa + bas.crb + phn.cuda; // Barbuda
export const cBelarus = bas.cBe + bas.cla + phn.crus; // Belarus
export const cBelgium = bas.cBe + bas.clg + bas.ciu + bas.cm; // Belgium
export const cBelize = bas.cBe + bas.cli + bas.cze; // Belize
export const cBenin = bas.cBe + bas.cni + bas.cn; // Benin
export const cBhutan = bas.cBh + bas.cut + bas.can; // Bhutan
export const cBolivia = bas.cBo + bas.cli + phn.cvia; // Bolivia
export const cBosnia = bas.cBo + bas.csn + bas.cia; // Bosnia
export const cBotswana = bas.cBo + bas.cts + bas.cwa + bas.cna; // Botswana
export const cBrazil = phn.cBra + bas.czi + bas.cl; // Brazil
export const cBrunei = bas.cBr + bas.cun + bas.cei; // Brunei
export const cBulgaria = bas.cBu + bas.clg + bas.car + bas.cia; // Bulgaria
export const cBurkinaFaso = bas.cBu + bas.crk + phn.cina + bas.cFa + bas.cso; // BurkinaFaso
export const cBurundi = bas.cBu + wr1.crun + bas.cdi; // Burundi
export const cCotedlvoire = bas.cCo + bas.cte + bas.cSpace + bas.cd + bas.clv + bas.coi + bas.cre; // Cote dlvoire
export const cCaboVerde = bas.cCa + bas.cbo + bas.cSpace + phn.cVer + bas.cde; // Cabo Verde
export const cCambodia = bas.cCa + bas.cmb + bas.cod + bas.cia; // Cambodia
export const cCameroon = bas.cCa + bas.cme + bas.cro + bas.con; // Cameroon
export const cCanada = wr1.cCan + phn.cada; // Canada
export const cCentralAfricanRepublic = wr1.cCentral + bas.cSpace + wr1.cAfrican + bas.cSpace + wr1.cRepublic; // Central African Republic
export const cChad = bas.cCh + bas.ca + bas.cd; // Chad
export const cChile = gen.cChi + bas.cle; // Chile
export const cChina = gen.cChi + bas.cna; // China
export const cColombia = phn.cCol + phn.comb + bas.cia; // Colombia
export const cComoros = gen.cCom + bas.cor + bas.cos; // Comoros
export const cCongo = bas.cC + phn.congo; // Congo
export const cCostaRica = wr1.cCost + bas.ca + bas.cSpace + bas.cR + phn.cica; // Costa Rica
export const cCroatia = bas.cCr + bas.coa + bas.cti + bas.ca; // Croatia
export const cCuba = bas.cCu + bas.cba; // Cuba
export const cCyprus = bas.cCy + bas.cpr + bas.cus; // Cyprus
export const cCzechia = bas.cCz + bas.cec + bas.chi + bas.ca; // Czechia
export const cDemocraticRepublicOfTheCongo = wr1.cDemocratic + bas.cSpace + wr1.cRepublic + bas.cSpace + bas.cof + bas.cSpace + wr1.cthe + bas.cSpace + cCongo; // Democratic Republic of the Congo
export const cDenmark = bas.cDe + phn.cnmar + bas.ck; // Denmark
export const cDjibouti = bas.cDj + bas.cib + wr1.cout + bas.ci; // Djibouti
export const cDominica = bas.cDo + phn.cminica; // Dominica
export const cDominicanRepublic = bas.cDo + phn.cminica + bas.cn + bas.cSpace + bas.cR + bas.cep + phn.cublic; // cDominican Republic
export const cEcuador = bas.cEc + bas.cua + phn.cdor; // Ecuador
export const cEgypt = bas.cEg + bas.cyp + bas.ct; // Egypt
export const cElSalvador = bas.cEl + bas.cSpace + bas.cSa + bas.clv + phn.cador; // El Salvador
export const cEquatorialGuinea = phn.cEqu + phn.cator + bas.cia + bas.cl + bas.cSpace + bas.cG + phn.cuinea; // Equatorial Guinea
export const cEritrea = bas.cEr + bas.cit + phn.crea; // Eritrea
export const cEstonia = bas.cEs + bas.cto + phn.cnia; // Estonia
export const cEswatini = bas.cEs + bas.cwa + bas.cti + bas.cni; // Eswatini -- Formerly Swaziland
export const cEthiopia = bas.cEt + bas.chi + bas.cop + bas.cia; // Ethiopia
export const cFiji = bas.cFi + bas.cji; // Fiji
export const cFinland = phn.cFin + bas.cla + bas.cnd; // Finland
export const cFrance = phn.cFra + phn.cnce; // France
export const cGabon = bas.cGa + bas.cbo + bas.cn; // Gabon
export const cGambia = bas.cGa + phn.cmbia; // Gambia
export const cGeorgia = bas.cGe + bas.cor + bas.cgi + bas.ca; // Georgia
export const cGermany = bas.cGe + phn.crman + bas.cy; // Germany
export const cGhana = bas.cGh + phn.cana; // Ghana
export const cGreece = bas.cGr + bas.cee + bas.cce; // Greece
export const cGrenada = bas.cGr + bas.cen + phn.cada; // Grenada
export const cGuatemala = bas.cGu + phn.cate + phn.cmal + bas.ca; // Guatemala
export const cGuinea = bas.cGu + phn.cinea; // Guinea
export const cGuineaBissau = bas.cGu + phn.cinea + bas.cDash + bas.cBi + bas.css + bas.cau; // Guinea-Bissau
export const cGuyana = bas.cGu + phn.cyan + bas.ca; // Guyana
export const cHaiti = bas.cHa + phn.citi; // Haiti
export const cHerzegovina = wr1.cHer + bas.cze + bas.cgo + bas.cvi + bas.cna; // Herzegovina
export const cHolySee = bas.cHo + bas.cly + bas.cSpace + bas.cSe + bas.ce; // Holy See
export const cHonduras = bas.cHo + bas.cnd + bas.cur + bas.cas; // Honduras
export const cHungary = wr1.cHung + phn.cary; // Hungary
export const cIceland = bas.cIc + phn.celand; // Iceland
export const cIndia = bas.cIn + phn.cdia; // India
export const cIndonesia = bas.cIn + wr1.cdone + phn.csia; // Indonesia
export const cIran = bas.cIr + bas.can; // Iran
export const cIraq = bas.cIr + bas.caq; // Iraq
export const cIreland = bas.cIr + phn.celand; // Ireland
export const cIsrael = bas.cIs + bas.cra + bas.cel; // Israel
export const cItaly = bas.cIt + bas.cal + bas.cy; // Italy
export const cJamaica = bas.cJa + bas.cma + phn.cica; // Jamaica
export const cJapan = bas.cJa + bas.cpa + bas.cn; // Japan
export const cJordan = bas.cJo + bas.crd + bas.can; // Jordan
export const cKazakhstan = bas.cKa + bas.cza + bas.ckh + phn.cstan; // Kazakhstan
export const cKenya = bas.cKe + bas.cny + bas.ca; // Kenya
export const cKiribati = bas.cKi + bas.cri + bas.cba + bas.cti; // Kiribati
export const cKuwait = bas.cKu + wr1.cwait; // Kuwait
export const cKyrgyzstan = bas.cKy + bas.crg + bas.cyz + phn.cstan; // Kyrgyzstan
export const cLaos = bas.cLa + bas.cos; // Laos
export const cLatvia = bas.cLa + bas.ctv + bas.cia; // Latvia
export const cLebanon = bas.cLe + bas.cba + phn.cnon; // Lebanon
export const cLesotho = bas.cLe + bas.cso + bas.cth + bas.co; // Lesotho
export const cLiberia = bas.cLi + bas.cbe + phn.cria; // Liberia
export const cLibya = bas.cLi + bas.cby + bas.ca; // Libya
export const cLiechtenstein = bas.cLi + bas.cec + bas.cht + bas.cen + phn.cste + bas.cin; // Liechtenstein
export const cLithuania = wr1.cLit + bas.chu + phn.cania; // Lithuania
export const cLuxembourg = bas.cLu + bas.cxe + bas.cmb + phn.cour + bas.cg; // Luxembourg
export const cMadagascar = bas.cMa + bas.cda + bas.cga + bas.csc + bas.car; // Madagascar
export const cMalawi = bas.cMa + bas.cla + bas.cwi; // Malawi
export const cMalaysia = bas.cMa + phn.clay + phn.csia; // Malaysia
export const cMaldives = bas.cMa + bas.cld + phn.cive + bas.cs; // Maldives
export const cMali = bas.cMa + bas.cli; // Mali
export const cMalta = bas.cMa + phn.clta; // Malta
export const cMarshallIslands = bas.cMa + bas.crs + bas.cha + bas.cll + bas.cSpace + bas.cIs + bas.cla + phn.cnds; // Marshall Islands
export const cMauritania = bas.cMa + bas.cur + bas.cit + phn.cania; // Mauritania
export const cMauritius = bas.cMa + bas.cur + phn.citi + bas.cus; // Mauritius
export const cMexico = bas.cMe + bas.cxi + bas.cco; // Mexico
export const cMicronesia = unt.cMicro + phn.cnesia; // Micronesia
export const cMoldova = bas.cMo + bas.cld + phn.cova; // Moldova
export const cMonaco = bas.cMo + bas.cna + bas.cco; // Monaco
export const cMongolia = bas.cMo + phn.cngo + phn.clia; // Mongolia
export const cMontenegro = bas.cMo + bas.cnt + bas.cen + bas.ceg + bas.cro; // Montenegro
export const cMorocco = bas.cMo + bas.cro + bas.ccc + bas.co; // Morocco
export const cMozambique = bas.cMo + bas.cza + bas.cmb + bas.ciq + bas.cue; // Mozambique
export const cMyanmar = bas.cMy + bas.can + phn.cmar; // Myanmar
export const cNamibia = bas.cNa + bas.camai + phn.cbia; // Namibia
export const cNauru = bas.cNa + phn.curu; // Nauru
export const cNepal = bas.cNe + wr1.cpal; // Nepal
export const cNetherlands = bas.cNe + phn.cther + bas.cla + phn.cnds; // Netherlands
export const cNewZealand = wr1.cNew + bas.cSpace + bas.cZe + phn.cala + bas.cnd; // New Zealand
export const cNevis = bas.cNe + bas.cvi + bas.cs; // Nevis
export const cNicaragua = bas.cNi + phn.ccar + phn.cagua; // Nicaragua
export const cNiger = bas.cNi + phn.cger; // Niger
export const cNigeria = bas.cNi + phn.cgeria; // Nigeria
export const cNorthKorea = bas.cNo + bas.crt + bas.ch + bas.cSpace + bas.cK + phn.corea; // North Korea
export const cNorthMacedonia = bas.cNo + bas.crt + bas.ch + bas.cSpace + bas.cM + phn.cace + bas.cdo + phn.cnia; // North Macedonia
export const cNorway = bas.cNo + bas.crw + bas.cay; // Norway
export const cOman = bas.cOm + bas.can; // Oman
export const cPakistan = bas.cPa + phn.ckistan; // Pakistan
export const cPalau = wr1.cPal + bas.cau; // Palau
export const cPalestine = wr1.cPal + phn.cest + phn.cine; // Palestine
export const cPanama = bas.cPa + phn.cnam + bas.ca; // Panama
export const cPapuaNewGuinea = wr1.cPapua + bas.cSpace + wr1.cNew + bas.cSpace + cGuinea; // Papua New Guinea
export const cParaguay = phn.cPara + phn.cguay; // Paraguay
export const cPeru = phn.cPer + bas.cu; // Peru
export const cPhilippines = gen.cPhi + bas.cli + bas.cpp + phn.cine + bas.cs; // Philippines
export const cPoland = bas.cPo + bas.cla + bas.cnd; // Poland
export const cPortugal = wr1.cPort + bas.cug + bas.cal; // Portugal
export const cPrincipe = phn.cPri + bas.cnc + bas.cip + bas.ce; // Principe
export const cQatar = bas.cQa + phn.ctar; // Qatar
export const cRomania = bas.cRo + wr1.cman + bas.cia; // Romania
export const cRussia = bas.cRu + bas.css + bas.cia; // Russia
export const cRwanda = bas.cRw + phn.canda; // Rwanda
export const cSaintKitts = bas.cSa + phn.cint + bas.cSpace + bas.cKi + bas.ctt + bas.cs; // Saint Kitts
export const cSaintLucia = bas.cSa + phn.cint + bas.cSpace + bas.cLu + bas.cci + bas.ca; // Saint Lucia
export const cSaintVincent = bas.cSa + phn.cint + bas.cSpace + bas.cVi + phn.cnce + bas.cnt; // Saint Vincent
export const cSomoa = bas.cSo + bas.cmo + bas.ca; // Somoa
export const cSanMarino = gen.cSan + bas.cSpace + bas.cMa + bas.cri + bas.cno; // San Marino
export const cSaoTome = bas.cSa + bas.co + bas.cSpace + bas.cT + phn.come; // Sao Tome
export const cSaudiArabia = bas.cSa + bas.cud + bas.ci + bas.cSpace + bas.cA + bas.cra + phn.cbia; // Saudi Arabia
export const cSenegal = bas.cSe + bas.cne + phn.cgal; // Senegal
export const cSerbia = bas.cSe + bas.crb + bas.cia; // Serbia
export const cSeychelles = bas.cSe + bas.cyc + bas.che + bas.cll + bas.ces; // Seychelles
export const cSierraLeone = gen.cSierra + bas.cSpace + bas.cLe + num.cone; // Sierra Leone
export const cSingapore = bas.cSi + phn.cnga + bas.cpo + bas.cre; // Singapore
export const cSlovakia = bas.cSl + phn.cova + bas.cki + bas.ca; // Slovakia
export const cSlovenia = bas.cSl + bas.cov + phn.cenia; // Slovenia
export const cSolomonIslands = bas.cSo + bas.clo + phn.cmon + bas.cSpace + bas.cIs + bas.cla + phn.cnds; // Solomon Islands
export const cSomalia = bas.cSo + phn.cmal + bas.cia; // Somalia
export const cSouthAfrica = bas.cSo + bas.cut + bas.ch + bas.cSpace + bas.cA + phn.cfrica; // South Africa
export const cSouthKorea = bas.cSo + bas.cut + bas.ch + bas.cSpace + bas.cK + phn.corea; // South Korea
export const cSouthSudan = bas.cSo + bas.cut + bas.ch + bas.cSpace + bas.cS + phn.cudan; // South Sudan
export const cSpain = bas.cSp + phn.cain; // Spain
export const cSriLanka = bas.cSr + bas.ci + bas.cSpace + bas.cL + bas.can + bas.cka; // Sri Lanka
export const cSudan = bas.cSu + phn.cdan; // Sudan
export const cSuriname = bas.cSu + bas.cri + wr1.cname; // Suriname
export const cSweden = bas.cSw + bas.ced + bas.cen; // Sweden
export const cSwitzerland = bas.cSw + bas.cit + bas.cze + phn.crland; // Switzerland
export const cSyria = bas.cSy + phn.cria; // Syria
export const cTajikistan = bas.cTa + bas.cji + phn.ckistan; // Tajikistan
export const cTanzania = bas.cTa + bas.cn + bas.cza + phn.cnia; // Tanzania
export const cThailand = bas.cTh + phn.cail + phn.cand; // Thailand
export const cTimorLeste = bas.cTi + bas.cmo + bas.cr + bas.cDash + bas.cL + phn.cest + bas.ce; // Timor-Leste
export const cTogo = bas.cTo + bas.cgo; // Togo
export const cTonga = bas.cTo + phn.cnga; // Tonga
export const cTrinidadAndTabago = wr1.cTrinidad + bas.cSpace + wr1.cand + bas.cSpace + wr1.cTabago; // Trinidad and Tabago
export const cTunisia = bas.cTu + bas.cni + phn.csia; // Tunisia
export const cTurkey = bas.cTu + bas.crk + bas.cey; // Turkey
export const cTurkmenistan = bas.cTu + bas.crk + phn.cmen + phn.cistan; // Turkmenistan
export const cTuvalu = bas.cTu + phn.cval + bas.cu; // Tuvalu
export const cUganda = bas.cUg + phn.canda; // Uganda
export const cUkraine = bas.cUk + phn.crain + bas.ce; // Ukraine
export const cUnitedArabEmirates = wr1.cUnited + bas.cSpace + wr1.cArab + bas.cSpace + wr1.cEmirates; // United Arab Emirates
export const cUnitedKingdom = wr1.cUnited + bas.cSpace + bas.cKi + bas.cng + phn.cdom; // United Kingdom
export const cUnitedStatesOfAmerica = wr1.cUnited + bas.cSpace + wr1.cStates + bas.cSpace + bas.cof + bas.cSpace + wr1.cAmerica; // United States Of Ammerica
export const cUruguay = bas.cUr + bas.cug + phn.cuay; // Uruguay
export const cUzbekistan = bas.cUz + bas.cbe + phn.ckistan; // Uzbekistan
export const cVanuatu = bas.cVa + bas.cnu + bas.cat + bas.cu; // Vanuatu
export const cVenezuela = bas.cVe + bas.cne + bas.czu + phn.cela; // Venezuela
export const cVietnam = bas.cVi + bas.cet + phn.cnam; // Vietnam
export const cYemen = bas.cYe + phn.cmen; // Yemen
export const cZambia = bas.cZa + phn.cmbia; // Zambia
export const cZimbabwe = bas.cZi + bas.cmb + bas.cab + bas.cwe; // Zimbabwe

// export default {
//   // Countries
//   [bas.cc + cAfghanistan]: cAfghanistan, // Afghanistan
//   [bas.cc + cAlbania]: cAlbania, // Albania
//   [bas.cc + cAlgeria]: cAlgeria, // Algeria
//   [bas.cc + cAndorra]: cAndorra, // Andorra
//   [bas.cc + cAngola]: cAngola, // Angola
//   [bas.cc + cAntigua]: cAntigua, // Antigua
//   [bas.cc + cArgentina]: cArgentina, // Argentina
//   [bas.cc + cArmenia]: cArmenia, // Armenia
//   [bas.cc + cAustralia]: cAustralia, // Australia
//   [bas.cc + cAustria]: cAustria, // Austria
//   [bas.cc + cAzerbaijan]: cAzerbaijan, // Azerbaijan
//   [bas.cc + cBahamas]: cBahamas, // Bahamas
//   [bas.cc + cBahrain]: cBahrain, // Bahrain
//   [bas.cc + cBangladesh]: cBangladesh, // Bangladesh
//   [bas.cc + cBarbados]: cBarbados, // Barbados
//   [bas.cc + cBarbuda]: cBarbuda, // Barbuda
//   [bas.cc + cBelarus]: cBelarus, // Belarus
//   [bas.cc + cBelgium]: cBelgium, // Belgium
//   [bas.cc + cBelize]: cBelize, // Belize
//   [bas.cc + cBenin]: cBenin, // Benin
//   [bas.cc + cBhutan]: cBhutan, // Bhutan
//   [bas.cc + cBolivia]: cBolivia, // Bolivia
//   [bas.cc + cBosnia]: cBosnia, // Bosnia
//   [bas.cc + cBotswana]: cBotswana, // Botswana
//   [bas.cc + cBrazil]: cBrazil, // Brazil
//   [bas.cc + cBrunei]: cBrunei, // Brunei
//   [bas.cc + cBulgaria]: cBulgaria, // Bulgaria
//   [bas.cc + cBurkinaFaso]: cBurkinaFaso, // BurkinaFaso
//   [bas.cc + cBurundi]: cBurundi, // Burundi
//   [bas.cc + con.cCotedlvoire]: cCotedlvoire, // Cote dlvoire
//   [bas.cc + con.cCaboVerde]: cCaboVerde, // Cabo Verde
//   [bas.cc + cCambodia]: cCambodia, // Cambodia
//   [bas.cc + cCameroon]: cCameroon, // Cameroon
//   [bas.cc + cCanada]: cCanada, // Canada
//   [bas.cc + con.cCentralAfricanRepublic]: cCentralAfricanRepublic, // Central African Republic
//   [bas.cc + cChad]: cChad, // Chad
//   [bas.cc + cChile]: cChile, // Chile
//   [bas.cc + cChina]: cChina, // China
//   [bas.cc + cColombia]: cColombia, // Colombia
//   [bas.cc + cComoros]: cComoros, // Comoros
//   [bas.cc + cCongo]: cCongo, // Congo
//   [bas.cc + con.cCostaRica]: cCostaRica, // Costa Rica
//   [bas.cc + cCroatia]: cCroatia, // Croatia
//   [bas.cc + cCuba]: cCuba, // Cuba
//   [bas.cc + cCyprus]: cCyprus, // Cyprus
//   [bas.cc + cCzechia]: cCzechia, // Czechia
//   [bas.cc + con.cDemocraticRepublicOfTheCongo]: cDemocraticRepublicOfTheCongo, // Democratic Republic of the Congo
//   [bas.cc + cDenmark]: cDenmark, // Denmark
//   [bas.cc + cDjibouti]: cDjibouti, // Djibouti
//   [bas.cc + cDominica]: cDominica, // Dominica
//   [bas.cc + con.cDominicanRepublic]: cDominicanRepublic, // cDominican Republic
//   [bas.cc + cEcuador]: cEcuador, // Ecuador
//   [bas.cc + cEgypt]: cEgypt, // Egypt
//   [bas.cc + con.cElSalvador]: cElSalvador, // El Salvador
//   [bas.cc + con.cEquatorialGuinea]: cEquatorialGuinea, // Equatorial Guinea
//   [bas.cc + cEritrea]: cEritrea, // Eritrea
//   [bas.cc + cEstonia]: cEstonia, // Estonia
//   [bas.cc + cEswatini]: cEswatini, // Eswatini -- Formerly Swaziland
//   [bas.cc + cEthiopia]: cEthiopia, // Ethiopia
//   [bas.cc + cFiji]: cFiji, // Fiji
//   [bas.cc + cFinland]: cFinland, // Finland
//   [bas.cc + cFrance]: cFrance, // France
//   [bas.cc + cGabon]: cGabon, // Gabon
//   [bas.cc + cGambia]: cGambia, // Gambia
//   [bas.cc + cGeorgia]: cGeorgia, // Georgia
//   [bas.cc + cGermany]: cGermany, // Germany
//   [bas.cc + cGhana]: cGhana, // Ghana
//   [bas.cc + cGreece]: cGreece, // Greece
//   [bas.cc + cGrenada]: cGrenada, // Grenada
//   [bas.cc + cGuatemala]: cGuatemala, // Guatemala
//   [bas.cc + cGuinea]: cGuinea, // Guinea
//   [bas.cc + con.cGuineaBissau]: cGuineaBissau, // Guinea-Bissau
//   [bas.cc + cGuyana]: cGuyana, // Guyana
//   [bas.cc + cHaiti]: cHaiti, // Haiti
//   [bas.cc + cHerzegovina]: cHerzegovina, // Herzegovina
//   [bas.cc + con.cHolySee]: cHolySee, // Holy See
//   [bas.cc + cHonduras]: cHonduras, // Honduras
//   [bas.cc + cHungary]: cHungary, // Hungary
//   [bas.cc + cIceland]: cIceland, // Iceland
//   [bas.cc + cIndia]: cIndia, // India
//   [bas.cc + cIndonesia]: cIndonesia, // Indonesia
//   [bas.cc + cIran]: cIran, // Iran
//   [bas.cc + cIraq]: cIraq, // Iraq
//   [bas.cc + cIreland]: cIreland, // Ireland
//   [bas.cc + cIsrael]: cIsrael, // Israel
//   [bas.cc + cItaly]: cItaly, // Italy
//   [bas.cc + cJamaica]: cJamaica, // Jamaica
//   [bas.cc + cJapan]: cJapan, // Japan
//   [bas.cc + cJordan]: cJordan, // Jordan
//   [bas.cc + cKazakhstan]: cKazakhstan, // Kazakhstan
//   [bas.cc + cKenya]: cKenya, // Kenya
//   [bas.cc + cKiribati]: cKiribati, // Kiribati
//   [bas.cc + cKuwait]: cKuwait, // Kuwait
//   [bas.cc + cKyrgyzstan]: cKyrgyzstan, // Kyrgyzstan
//   [bas.cc + cLaos]: cLaos, // Laos
//   [bas.cc + cLatvia]: cLatvia, // Latvia
//   [bas.cc + cLebanon]: cLebanon, // Lebanon
//   [bas.cc + cLesotho]: cLesotho, // Lesotho
//   [bas.cc + cLiberia]: cLiberia, // Liberia
//   [bas.cc + cLibya]: cLibya, // Libya
//   [bas.cc + cLiechtenstein]: cLiechtenstein, // Liechtenstein
//   [bas.cc + cLithuania]: cLithuania, // Lithuania
//   [bas.cc + cLuxembourg]: cLuxembourg, // Luxembourg
//   [bas.cc + cMadagascar]: cMadagascar, // Madagascar
//   [bas.cc + cMalawi]: cMalawi, // Malawi
//   [bas.cc + cMalaysia]: cMalaysia, // Malaysia
//   [bas.cc + cMaldives]: cMaldives, // Maldives
//   [bas.cc + cMali]: cMali, // Mali
//   [bas.cc + cMalta]: cMalta, // Malta
//   [bas.cc + con.cMarshallIslands]: cMarshallIslands, // Marshall Islands
//   [bas.cc + cMauritania]: cMauritania, // Mauritania
//   [bas.cc + cMauritius]: cMauritius, // Mauritius
//   [bas.cc + cMexico]: cMexico, // Mexico
//   [bas.cc + cMicronesia]: cMicronesia, // Micronesia
//   [bas.cc + cMoldova]: cMoldova, // Moldova
//   [bas.cc + cMonaco]: cMonaco, // Monaco
//   [bas.cc + cMongolia]: cMongolia, // Mongolia
//   [bas.cc + cMontenegro]: cMontenegro, // Montenegro
//   [bas.cc + cMorocco]: cMorocco, // Morocco
//   [bas.cc + cMozambique]: cMozambique, // Mozambique
//   [bas.cc + cMyanmar]: cMyanmar, // Myanmar
//   [bas.cc + cNamibia]: cNamibia, // Namibia
//   [bas.cc + cNauru]: cNauru, // Nauru
//   [bas.cc + cNepal]: cNepal, // Nepal
//   [bas.cc + cNetherlands]: cNetherlands, // Netherlands
//   [bas.cc + con.cNewZealand]: cNewZealand, // New Zealand
//   [bas.cc + cNevis]: cNevis, // Nevis
//   [bas.cc + cNicaragua]: cNicaragua, // Nicaragua
//   [bas.cc + cNiger]: cNiger, // Niger
//   [bas.cc + cNigeria]: cNigeria, // Nigeria
//   [bas.cc + con.cNorthKorea]: cNorthKorea, // North Korea
//   [bas.cc + con.cNorthMacedonia]: cNorthMacedonia, // North Macedonia
//   [bas.cc + cNorway]: cNorway, // Norway
//   [bas.cc + cOman]: cOman, // Oman
//   [bas.cc + cPakistan]: cPakistan, // Pakistan
//   [bas.cc + cPalau]: cPalau, // Palau
//   [bas.cc + cPalestine]: cPalestine, // Palestine
//   [bas.cc + cPanama]: cPanama, // Panama
//   [bas.cc + con.cPapuaNewGuinea]: cPapuaNewGuinea, // Papua New Guinea
//   [bas.cc + cParaguay]: cParaguay, // Paraguay
//   [bas.cc + cPeru]: cPeru, // Peru
//   [bas.cc + cPhilippines]: cPhilippines, // Philippines
//   [bas.cc + cPoland]: cPoland, // Poland
//   [bas.cc + cPortugal]: cPortugal, // Portugal
//   [bas.cc + cPrincipe]: cPrincipe, // Principe
//   [bas.cc + cQatar]: cQatar, // Qatar
//   [bas.cc + cRomania]: cRomania, // Romania
//   [bas.cc + cRussia]: cRussia, // Russia
//   [bas.cc + cRwanda]: cRwanda, // Rwanda
//   [bas.cc + con.cSaintKitts]: cSaintKitts, // Saint Kitts
//   [bas.cc + con.cSaintLucia]: cSaintLucia, // Saint Lucia
//   [bas.cc + con.cSaintVincent]: cSaintVincent, // Saint Vincent
//   [bas.cc + cSomoa]: cSomoa, // Somoa
//   [bas.cc + con.cSanMarino]: cSanMarino, // San Marino
//   [bas.cc + con.cSaoTome]: cSaoTome, // Sao Tome
//   [bas.cc + con.cSaudiArabia]: cSaudiArabia, // Saudi Arabia
//   [bas.cc + cSenegal]: cSenegal, // Senegal
//   [bas.cc + cSerbia]: cSerbia, // Serbia
//   [bas.cc + cSeychelles]: cSeychelles, // Seychelles
//   [bas.cc + con.cSierraLeone]: cSierraLeone, // Sierra Leone
//   [bas.cc + cSingapore]: cSingapore, // Singapore
//   [bas.cc + cSlovakia]: cSlovakia, // Slovakia
//   [bas.cc + cSlovenia]: cSlovenia, // Slovenia
//   [bas.cc + con.cSolomonIslands]: cSolomonIslands, // Solomon Islands
//   [bas.cc + cSomalia]: cSomalia, // Somalia
//   [bas.cc + con.cSouthAfrica]: cSouthAfrica, // South Africa
//   [bas.cc + con.cSouthKorea]: cSouthKorea, // South Korea
//   [bas.cc + con.cSouthSudan]: cSouthSudan, // South Sudan
//   [bas.cc + cSpain]: cSpain, // Spain
//   [bas.cc + con.cSriLanka]: cSriLanka, // Sri Lanka
//   [bas.cc + cSudan]: cSudan, // Sudan
//   [bas.cc + cSuriname]: cSuriname, // Suriname
//   [bas.cc + cSweden]: cSweden, // Sweden
//   [bas.cc + cSwitzerland]: cSwitzerland, // Switzerland
//   [bas.cc + cSyria]: cSyria, // Syria
//   [bas.cc + cTajikistan]: cTajikistan, // Tajikistan
//   [bas.cc + cTanzania]: cTanzania, // Tanzania
//   [bas.cc + cThailand]: cThailand, // Thailand
//   [bas.cc + con.cTimorLeste]: cTimorLeste, // Timor-Leste
//   [bas.cc + cTogo]: cTogo, // Togo
//   [bas.cc + cTonga]: cTonga, // Tonga
//   [bas.cc + con.cTrinidadAndTabago]: cTrinidadAndTabago, // Trinidad and Tabago
//   [bas.cc + cTunisia]: cTunisia, // Tunisia
//   [bas.cc + cTurkey]: cTurkey, // Turkey
//   [bas.cc + cTurkmenistan]: cTurkmenistan, // Turkmenistan
//   [bas.cc + cTuvalu]: cTuvalu, // Tuvalu
//   [bas.cc + cUganda]: cUganda, // Uganda
//   [bas.cc + cUkraine]: cUkraine, // Ukraine
//   [bas.cc + con.cUnitedArabEmirates]: cUnitedArabEmirates, // United Arab Emirates
//   [bas.cc + con.cUnitedKingdom]: cUnitedKingdom, // United Kingdom
//   [bas.cc + con.cUnitedStatesOfAmerica]: cUnitedStatesOfAmerica, // United States Of Ammerica
//   [bas.cc + cUruguay]: cUruguay, // Uruguay
//   [bas.cc + cUzbekistan]: cUzbekistan, // Uzbekistan
//   [bas.cc + cVanuatu]: cVanuatu, // Vanuatu
//   [bas.cc + cVenezuela]: cVenezuela, // Venezuela
//   [bas.cc + cVietnam]: cVietnam, // Vietnam
//   [bas.cc + cYemen]: cYemen, // Yemen
//   [bas.cc + cZambia]: cZambia, // Zambia
//   [bas.cc + cZimbabwe]: cZimbabwe // Zimbabwe
// };
