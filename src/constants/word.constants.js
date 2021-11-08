/**
 * @file word.constants.js
 * @module word-constants
 * @description Contains many re-usable word constants.
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:numeric-constants
 * @requires module:generic-constants
 * @requires module:unit-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

var bas = require('./basic.constants');
var phn = require('./phonic.constants');
var num = require('./numeric.constants');
var gen = require('./generic.constants');
var unt = require('./unit.constants');

// Miscelaneious Words
let c1a1d = 'a' + 'd'; // ad // 'ca' & 'cd' is some how a reserved word.
let c3d = num.c3 + bas.cd; // 3d
let c3D = num.c3 + bas.cD; // 3D
let cout = bas.co + bas.cut; // out
let cOut = bas.cO + bas.cut; // Out
let cLog = bas.cL + bas.cog; // Log
let clog = bas.cl + bas.cog; // log
let cLogs = cLog + bas.cs; // Logs
let clogs = clog + bas.cs; // logs
let ckey = bas.ck + bas.cey; // key
let cKey = bas.cK + bas.cey; // Key
let ckeys = ckey + bas.cs; // keys
let cKeys = cKey + bas.cs; // Keys
let ckeyed = ckey + bas.ced; // keyed
let cKeyed = cKey + bas.ced; // Keyed
let ckeying = ckey + phn.cing; // keying
let cKeying = cKey + phn.cing; // Keying
let cnode = bas.cn + phn.code; // node
let cNode = bas.cN + phn.code; // Node
let curl = bas.cur + bas.cl; // url
let cURL = bas.cUR + bas.cL; // URL
let cnth = bas.cn + bas.cth; // nth
let cNth = bas.cN + bas.cth; // Nth
let cregEx = phn.creg + bas.cEx; // regEx
let cRegEx = phn.cReg + bas.cEx; // RegEx
let cflag = bas.cfl + bas.cag; // flag
let cFlag = bas.cFl + bas.cag; // Flag
let cflags = cflag + bas.cs; // flags
let cFlags = cFlag + bas.cs; // Flags

// Data Types
let cstring = bas.cs + phn.ctring; // string
let cString = bas.cS + phn.ctring; // String
let cstrings = cstring + bas.cs; // strings
let cStrings = cString + bas.cs; // Strings
let cinteger = bas.ci + phn.cnteger; // integer
let cInteger = bas.cI + phn.cnteger; // Integer
let cintegers = cinteger + bas.cs; // integers
let cIntegers = cInteger + bas.cs; // Integers
let cfloat = bas.cf + phn.cloat; // float
let cFloat = bas.cF + phn.cloat; // Float
let cfloats = cfloat + bas.cs; // floats
let cFloats = cFloat + bas.cs; // Floats
let clong = bas.cl + phn.cong; // long
let cLong = bas.cL + phn.cong; // Long
let clongs = clong + bas.cs; // longs
let cLongs = cLong + bas.cs; // Longs
let clonger = clong + bas.cer; // longer
let cLonger = cLong + bas.cer; // Longer
let clongest = clong + phn.cest; // longest
let cLongest = cLong + phn.cest; // Longest
let cshort = bas.cs + phn.chort; // short
let cShort = bas.cS + phn.chort; // Short
let cshorts = cshort + bas.cs; // shorts
let cShorts = cShort + bas.cs; // Shorts
let cshorter = cshort + bas.cer; // shorter
let cShorter = cShort + bas.cer; // Shorter
let cshortest = cshort + phn.cest; // shortest
let cShortest = cShort + phn.cest; // Shortest
let cdouble = bas.cd + phn.couble; // double
let cDouble = bas.cD + phn.couble; // Double
let cdoubles = cdouble + bas.cs; // doubles
let cDoubles = cDouble + bas.cs; // Doubles
let cchar = bas.cch + bas.car; // char
let cChar = bas.cCh + bas.car; // Char
let cchars = cchar + bas.cs; // chars
let cChars = cChar + bas.cs; // Chars
let cboolean = bas.cb + phn.coolean; // boolean
let cBoolean = bas.cB + phn.coolean; // Boolean
let cbooleans = cboolean + bas.cs; // booleans
let cBooleans = cBoolean + bas.cs; // Booleans
let cobject = bas.co + phn.cbject; // object
let cObject = bas.cO + phn.cbject; // Object
let cobjects = cobject + bas.cs; // objects
let cObjects = cObject + bas.cs; // Objects

// General Use Words
let csubstring = phn.csub + cstring; // substring
let csubString = phn.csub + cString; // subString
let cSubString = phn.cSub + cString; // SubString
let cwind = bas.cw + phn.cind; // wind
let cWind = bas.cW + phn.cind; // Wind
let cwindow = cwind + bas.cow; // window
let cWindow = cWind + bas.cow; // Window
let cwindows = cwindow + bas.cs; // windows
let cWindows = cWindow + bas.cs; // Windows
let clinux = phn.clin + bas.cux; // linux
let cLinux = phn.cLin + bas.cux; // Linux
let cword = bas.cw + phn.cord; // word
let cWord = bas.cW + phn.cord; // Word
let cwords = cword + bas.cs; // words
let cWords = cWord + bas.cs; // Words
let coops = bas.co + phn.cops; // oops
let cOops = bas.cO + phn.cops; // Oops
let cOOPS = bas.cO + phn.cOPS; // OOPS
let clet = bas.cle + bas.ct; // let
let cLet = bas.cLe + bas.ct; // Let
let clets = clet + bas.cs; // lets
let cLets = cLet + bas.cs; // Lets
let cfig = bas.cf + bas.cig; // fig
let cFig = bas.cF + bas.cig; // Fig
let cfiglet = cfig + clet; // figlet
let cFiglet = cFig + clet; // Figlet
let cconfig = phn.ccon + cfig; // config
let cConfig = phn.cCon + cfig; // Config
let cconfiguration = cconfig + bas.cur + phn.cation; // configuration
let cConfiguration = cConfig + bas.cur + phn.cation; // Configuration
let cconfigurations = cconfiguration + bas.cs; // configurations
let cConfigurations = cConfiguration + bas.cs; // Configurations
let cconfigured = cconfig + phn.cured; // configured
let cConfigured = cConfig + phn.cured; // Configured
let cconfiguring = cconfig + bas.cur + phn.cing; // configuring
let cConfiguring = cConfig + bas.cur + phn.cing; // Configuring
let cempty = bas.cem + bas.cpt + bas.cy; // empty
let cEmpty = bas.cEm + bas.cpt + bas.cy; // Empty
let cfull = bas.cf + phn.cull; // full
let cFull = bas.cF + phn.cull; // Full
let cfully = cfull + bas.cy; // fully
let cFully = cFull + bas.cy; // Fully
let ccreate = bas.cc + phn.create; // create
let cCreate = bas.cC + phn.create; // Create
let cSubmit = bas.cSu + bas.cbm + bas.cit; // Submit
let c_add = c1a1d + bas.cd; // add
let cAdd = bas.cAd + bas.cd; // Add
let cADD = bas.cAD + bas.cD; // ADD
let cadded = c_add + bas.ced; // added
let cAdded = cAdd + bas.ced; // Added
let cadding = c_add + phn.cing; // adding
let cAdding = cAdd + phn.cing; // Adding
let cadditional = c_add + phn.cition + bas.cal; // additional
let cAdditional = cAdd + phn.cition + bas.cal; // Additional
let cADDITIONAL = cADD + phn.cITION + bas.cAL; // ADDITIONAL
let cadditionals = cadditional + bas.cs; // additionals
let cAdditionals = cAdditional + bas.cs; // Additionals
let cpen = bas.cpe + bas.cn; // pen
let cPen = bas.cPe + bas.cn; // Pen
let cpens = cpen + bas.cs; // pens
let cPens = cPen + bas.cs; // Pens
let cclose = bas.ccl + phn.cose; // close
let cClose = bas.cCl + phn.cose; // Close
let cclosed = cclose + bas.cd; // closed
let cClosed = cClose + bas.cd; // Closed
let cclosing = bas.ccl + bas.cos + phn.cing; // closing
let cClosing = bas.cCl + bas.cos + phn.cing; // Closing
let copen = bas.co + cpen; // open
let cOpen = bas.cO + cpen; // Open
let copens = copen + bas.cs; // opens
let cOpens = cOpen + bas.cs; // Opens
let copened = copen + bas.ced; // opened
let cOpened = cOpen + bas.ced; // Opened
let copening = copen + phn.cing; // opening
let cOpening = cOpen + phn.cing; // Opening
let cUpdate = bas.cUp + phn.cdate; // Update
let cEdit = bas.cEd + bas.cit; // Edit
let cdelete = bas.cd + phn.celete; // delete
let cDelete = bas.cD + phn.celete; // Delete
let cdeletion = phn.cdel + bas.ce + phn.ction; // deletion
let cDeletion = phn.cDel + bas.ce + phn.ction; // Deletion
let cinsert = bas.cin + phn.csert; // insert
let cInsert = bas.cIn + phn.csert; // Insert
let cinsertion = cinsert + phn.cion; // insertion
let cInsertion = cInsert + phn.cion; // Insertion
let csubstitute = phn.csub + bas.cs + phn.ctit + phn.cute; // substitute
let cSubstitute = phn.cSub + bas.cs + phn.ctit + phn.cute; // Substitute
let csubstitution = phn.csub + bas.cs + phn.ctit + bas.cu + phn.ction; // substitution
let cSubstitution = phn.cSub + bas.cs + phn.ctit + bas.cu + phn.ction; // Substitution
let call = phn.call; // all
let cAll = phn.cAll; // All
let cat = bas.ca + bas.ct; // at
let cAt = bas.cA + bas.ct; // At // Not to be confused with the bas.cAt = '@'!!!
let cselect = bas.cse + bas.cle + bas.cct; // select
let cSelect = bas.cSe + bas.cle + bas.cct; // Select
let ccan = bas.cca + bas.cn; // can
let cCan = bas.cCa + bas.cn; // Can
let ccancel = ccan + phn.ccel; // cancel
let cCancel = cCan + phn.ccel; // Cancel
let cconfirm = bas.cco + bas.cnf + bas.cir + bas.cm; // confirm
let cConfirm = bas.cCo + bas.cnf + bas.cir + bas.cm; // Confirm
let ccount = bas.cco + phn.cunt; // count
let cCount = bas.cCo + phn.cunt; // Count
let ccounter = ccount + bas.cer; // counter
let cCounter = cCount + bas.cer; // Counter
let cAccount = bas.cAc + ccount; // Account
let cHamburger = bas.cHa + bas.cmb + bas.cur + bas.cge + bas.cr; // Hamburger
let cMe = bas.cM + bas.ce; // Me
let cMenu = cMe + bas.cnu; // Menu
let cwith = bas.cw + phn.cith; // with
let cWith = bas.cW + phn.cith; // With
let cwithout = cwith + cout; // without
let cWithout = cWith + cout; // Without
let cdetail = bas.cde + bas.cta + bas.cil; // detail
let cDetail = bas.cDe + bas.cta + bas.cil; // Detail
let cdetails = cdetail + bas.cs; // details
let cDetails = cDetail + bas.cs; // Details
let cfront = bas.cfr + bas.con + bas.ct; // front
let cFront = bas.cFr + bas.con + bas.ct; // Front
let cback = bas.cba + bas.cck; // back
let cBack = bas.cBa + bas.cck; // Back
let cleft = bas.cle + bas.cft; // left
let cLeft = bas.cLe + bas.cft; // Left
let cright = bas.cri + bas.cgh + bas.ct; // right
let cRight = bas.cRi + bas.cgh + bas.ct; // Right
let cTo = bas.cTo; // To
let ctop = bas.cto + bas.cp; // top
let cTop = cTo + bas.cp; // Top
let cbottom = bas.cbo + bas.ctt + bas.com; // bottom
let cBottom = bas.cBo + bas.ctt + bas.com; // Bottom
let cbegin = bas.cbe + bas.cgi + bas.cn; // begin
let cBegin = bas.cBe + bas.cgi + bas.cn; // Begin
let cBEGIN = bas.cBE + bas.cGI + bas.cN; // BEGIN
let cbeginning = cbegin + bas.cn + phn.cing; // beginning
let cBeginning = cBegin + bas.cn + phn.cing; // Beginning
let cend = bas.cen + bas.cd; // end
let cEnd = bas.cEn + bas.cd; // End
let cEND = bas.cEN + bas.cD; // END
let cending = cend + phn.cing; // ending
let cEnding = cEnd + phn.cing; // Ending
let cthe = bas.cth + bas.ce; // the
let cThe = bas.cTh + bas.ce; // The
let citem = bas.cit + bas.cem; // item
let cItem = bas.cIt + bas.cem; // Item
let citems = citem + bas.cs; // items
let cItems = cItem + bas.cs; // Items
let clist = bas.cli + bas.cst; // list
let cList = bas.cLi + bas.cst; // List
let clists = clist + bas.cs; // lists
let cLists = cList + bas.cs; // Lists
let clisted = clist + bas.ced; // listed
let cListed = cList + bas.ced; // Listed
let cshare = bas.cs + phn.chare; // share
let cShare = bas.cS + phn.chare; // Share
let cShares = cShare + bas.cs; // Shares
let cshares = cshare + bas.cs; // shares
let cshared = cshare + bas.cd; // shared
let cShared = cShare + bas.cd; // Shared
let cUnShared = bas.cUn + cShared; // UnShared
let cUnshared = bas.cUn + cshared; // Unshared
let cUnshare = bas.cUn + cshare; // Unshare
let cUnShare = bas.cUn + cShare; // UnShare
let cview = bas.cv + phn.ciew; // view
let cView = bas.cV + phn.ciew; // View
let cNew = bas.cNe + bas.cw; // New
let cload = bas.clo + 'ad'; // bas.cad; // load // NOTE: Apparently 'cad' is also a reserved word.
let cLoad = bas.cLo + 'ad'; // bas.cad; // Load // NOTE: Apparently 'cad' is also a reserved word.
let cloads = cload + bas.cs; // loads
let cLoads = cLoad + bas.cs; // Loads
let cloaded = cload + bas.ced; // loaded
let cLoaded = cLoad + bas.ced; // Loaded
let cloading = cload + phn.cing; // loading
let cLoading = cLoad + phn.cing; // Loading
let cclick = bas.cc + phn.click; // click
let cClick = bas.cC + phn.click; // Click
let cpress = bas.cp + phn.cress; // press
let cPress = bas.cP + phn.cress; // Press
let cpresses = cpress + bas.ces; // presses
let cPresses = cPress + bas.ces; // Presses
let cpressed = cpress + bas.ced; // pressed
let cPressed = cPress + bas.ced; // Pressed
let cpressing = cpress + phn.cing; // pressing
let cPressing = cPress + phn.cing; // Pressing
let cpressKey = cpress + cKey; // pressKey
let cPressKey = cPress + cKey; // PressKey
let cexpect = phn.cexp + phn.cect; // expect
let cExpect = phn.cExp + phn.cect; // Expect
let cexpects = cexpect + bas.cs; // expects
let cExpects = cExpect + bas.cs; // Expects
let cexpected = cexpect + bas.ced; // expected
let cExpected = cExpect + bas.ced; // Expected
let cexpecting = cexpect + phn.cing; // expecting
let cExpecting = cExpect + phn.cing; // Expecting
let cnavigate = bas.cn + phn.cavigate; // navigate
let cNavigate = bas.cN + phn.cavigate; // Navigate
let csave = bas.cs + phn.cave; // Save
let cSave = bas.cS + phn.cave; // Save
let cDownload = bas.cDo + bas.cwn + bas.clo + 'ad'; // Download
let cNegative = bas.cNe + bas.cga + phn.ctive; // Negative
let cPositive = bas.cPo + bas.csi + phn.ctive; // Positive
let cEntire = bas.cEn + bas.cti + bas.cre; // Entire
let cinfo = bas.cin + bas.cfo; // info
let cInfo = bas.cIn + bas.cfo; // Info
let cLink = bas.cLi + bas.cnk; // Link
let cLabel = bas.cLa + bas.cbe + bas.cl; // Label
let cField = bas.cFi + bas.cel + bas.cd; // Field
let ctype = bas.ct + phn.cype; // type
let cType = bas.cT + phn.cype; // Type
let cTypes = cType + bas.cs; // Types
let cvalid = bas.cv + phn.calid; // valid
let cValid = bas.cV + phn.calid; // Valid
let cVALID = bas.cV + phn.cALID; // VALID
let cvalidation = cvalid + bas.ca + phn.ction; // validation
let cValidation = cValid + bas.ca + phn.ction; // Validation
let cvalidations = cvalidation + bas.cs; // validations
let cValidations = cValidation + bas.cs; // Validations
let cvalidate = bas.cva + bas.cli + phn.cdate; // validate
let cValidate = bas.cVa + bas.cli + phn.cdate; // Validate
let cinvalid = bas.cin + cvalid; // invalid
let cInvalid = bas.cIn + cvalid; // Invalid
let cINVALID = bas.cIN + cVALID; // INVALID
let cbug = bas.cbu + bas.cg; // bug
let cdebug = bas.cde + cbug; // debug
let cDebug = bas.cDe + cbug; // Debug
let cpage = bas.cp + phn.cage; // page
let cPage = bas.cP + phn.cage; // Page
let cpages = cpage + bas.cs; // pages
let cPages = cPage + bas.cs; // Pages
let cmessage = bas.cme + bas.css + phn.cage; // message
let cMessage = cMe + bas.css + phn.cage; // Message
let cmessages = cmessage + bas.cs; // messages
let cMessages = cMessage + bas.cs; // Messages
let cScript = bas.cSc + bas.cri + bas.cpt; // Script
let cScripts = cScript + bas.cs; // Scripts
let ckeyword = ckey + cword; // keyword
let cKeyword = cKey + cword; // Keyword
let ckeywords = ckeyword + bas.cs; // keywords
let cKeywords = cKeyword + bas.cs; // Keywords
let cdata = bas.cd + phn.cata; // data
let cData = bas.cD + phn.cata; // Data
let cDATA = bas.cD + phn.cATA; // DATA
let cresult = phn.cres + phn.cult; // result
let cResult = phn.cRes + phn.cult; // Result
let cresults = cresult + bas.cs; // results
let cResults = cResult + bas.cs; // Results
let cresulted = cresult + bas.ced; // resulted
let cResulted = cResult + bas.ced; // Resulted
let cresulting = cresult + phn.cing; // resulting
let cResulting = cResult + phn.cing; // Resulting
let cwork = bas.cwo + bas.crk; // work
let cWork = bas.cWo + bas.crk; // Work
let cflow = bas.cfl + bas.cow; // flow
let cFlow = bas.cFl + bas.cow; // Flow
let cworkflow = cwork + cflow; // workflow
let cWorkflow = cWork + cflow; // Workflow
let cworkflows = cworkflow + bas.cs; // workflows
let cWorkflows = cWorkflow + bas.cs; // Workflows
let ctest = bas.ct + phn.cest; // test
let cTest = bas.cT + phn.cest; // Test
let cTEST = bas.cTE + bas.cST; // TEST
let ctests = ctest + bas.cs; // tests
let cTests = cTest + bas.cs; // Tests
let cTESTS = cTEST + bas.cS; // TESTS
let cStatus = bas.cSt + bas.cat + bas.cus; // Status
let cTestStatus = cTest + cStatus; // TestStatus
let cTestStatusMessage = cTest + cStatus + cMessage; // TestStatusMessage
let cTestWorkflow = cTest + cWorkflow; // TestWorkflow
let cBureau = bas.cBu + bas.cre + bas.cau; // Bureau
let cExhaustive = bas.cEx + bas.cha + bas.cus + bas.cti + bas.cve; // Exhaustive
let cBrowser = bas.cBr + bas.cow + bas.cse + bas.cr; // Browser
let cact = bas.cac + bas.ct; // act
let cAct = bas.cAc + bas.ct; // Act
let caction = cact + phn.cion;// action
let cAction = cAct + phn.cion; // Action
let cactions = caction + bas.cs; // actions
let cActions = cAction + bas.cs; // Actions
let cactual = cact + phn.cual; // actual
let cActual = cAct + phn.cual; // Actual
let cauto = bas.ca + phn.cuto; // auto
let cAuto = bas.cA + phn.cuto; // Auto
let cautomation = cauto + phn.cmation; // automation
let cAutomation = cAuto + phn.cmation; // Automation
let cnumber = bas.cn + phn.cumber; // number
let cNumber = bas.cN + phn.cumber; // Number
let cHost = bas.cHo + bas.cst; // Host
let cOf = bas.cOf; // Of
let crow = bas.cro + bas.cw; // row
let cRow = bas.cRo + bas.cw; // Row
let crows = crow + bas.cs; // rows
let cRows = cRow + bas.cs; // Rows
let crowed = crow + bas.ced; // rowed
let cRowed = cRow + bas.ced; // Rowed
let crowing = crow + phn.cing; // rowing
let cRowing = cRow + phn.cing; // Rowing
let crun = bas.cru + bas.cn; // run
let cRun = bas.cRu + bas.cn; // Run
let cruns = crun + bas.cs; // runs
let cRuns = cRun + bas.cs; // Runs
let crunning = crun + bas.cn + phn.cing; // running
let cRunning = cRun + bas.cn + phn.cing; // Running
let cmaster = phn.cmas + phn.cter; // master
let cMaster = phn.cMas + phn.cter; // Master
let cEnvironment = bas.cEn + bas.cvi + bas.cro + bas.cn + phn.cment; // Environment
let cname = bas.cn + phn.came; // name
let cName = bas.cN + phn.came; // Name
let cnames = cname + bas.cs; // names
let cNames = cName + bas.cs; // Names
let cnamed = cname + bas.cd; // named
let cNamed = cName + bas.cd; // Named
let ckeywordName = ckeyword + cName; // keywordName
let cKeywordName = cKeyword + cName; // KeywordName
let cPageScriptName = cPage + cScript + cName; // PageScriptName
let cid = bas.cid; // id
let cId = bas.cId; // Id
let cID = bas.cID; // ID
let cmail = bas.cma + bas.cil; // mail
let cEmail = bas.cE + cmail; // Email
let cEmails = cEmail + bas.cs; // Emails
let cReceive = bas.cRe + bas.cce + bas.civ + bas.ce; // Receive
let cReceived = cReceive + bas.cd; // Received
let cdate = phn.cdate; // date
let cDate = bas.cD + phn.cate; // Date
let ctime = bas.ct + phn.cime; // time
let cTime = bas.cT + phn.cime; // Time
let cruntime = crun + ctime; // runtime
let cRuntime = cRun + ctime; // Runtime
let cRunTime = cRun + cTime; // RunTime
let cstamp = bas.cst + phn.camp; // stamp
let cStamp = bas.cSt + phn.camp; // Stamp
let cstamps = cstamp + bas.cs; // stamps
let cStamps = cStamp + bas.cs; // Stamps
let cstamped = cstamp + bas.ced; // stamped
let cStamped = cStamp + bas.ced; // Stamped
let cstamping = cstamp + phn.cing; // stamping
let cStamping = cStamp + phn.cing; // Stamping
let cmediate = phn.cmed + bas.ci + phn.cate; // mediate
let cintermediate = phn.cinter + cmediate; // intermediate
let cIntermediate = phn.cInter + cmediate; // Intermediate
let cpath = bas.cp + phn.cath; // path
let cPath = bas.cP + phn.cath; // Path
let cpaths = cpath + bas.cs; // paths
let cPaths = cPath + bas.cs; // Paths
let cexit = bas.cex + bas.cit; // exit
let cExit = bas.cEx + bas.cit; // Exit
let cexiting = cexit + phn.cing; // exiting
let cExiting = cExit + phn.cing; // Exiting
let cViewer = bas.cVi + bas.cew + bas.cer; // Viewer
let cPermission = bas.cPe + bas.crm + bas.cis + bas.csi + bas.con; // Permission
let cBug = bas.cBu + bas.cg; // Bug
let cset = bas.cse + bas.ct; // set
let cSet = bas.cSe + bas.ct; // Set
let csetting = cset + bas.ct + phn.cing; // setting
let cSetting = cSet + bas.ct + phn.cing; // Setting
let csettings = csetting + bas.cs; // settings
let cSettings = cSetting + bas.cs; // Settings
let cPreview = phn.cPre + cview; // Preview
let climit = bas.cli + phn.cmit; // limit // NOTE: bas.cmi resolves as "s"
let cLimit = bas.cLi + phn.cmit; // Limit // NOTE: bas.cmi resolves as "s"
let cGate = bas.cGa + bas.cte; // Gate
let cway = bas.cwa + bas.cy; // way
let cWay = bas.cWa + bas.cy; // Way
let cGateway = cGate + cway; // Gateway
let cprocess = phn.cpro + phn.ccess; // process
let cProcess = phn.cPro + phn.ccess; // Process
let cPROCESS = phn.cPRO + phn.cCESS; // PROCESS
let cprocessed = cprocess + bas.ced; // processed
let cProcessed = cProcess + bas.ced; // Processed
let cprocesses = cprocess + bas.ces; // processes
let cProcesses = cProcess + bas.ces; // Processes
let cprocessing = cprocess + phn.cing; // processing
let cProcessing = cProcess + phn.cing; // Processing
let cPROCESSING = cPROCESS + phn.cING; // PROCESSING
let ccomplete = gen.ccom + bas.cp + phn.clete; // complete
let cComplete = gen.cCom + bas.cp + phn.clete; // Complete
let ccompleted = ccomplete + bas.cd; // completed
let cCompleted = cComplete + bas.cd; // Completed
let cand = bas.can + bas.cd; // and
let cAnd = bas.cAn + bas.cd; // And
let cuse = bas.cus + bas.ce; // use
let cUse = bas.cUs + bas.ce; // Use
let cuser = cuse + bas.cr; // user
let cUser = cUse + bas.cr; // User
let cAccess = bas.cAc + phn.ccess; // Access
let clevel = bas.cle + phn.cvel; // level
let cLevel = bas.cLe + phn.cvel; // Level
let cget = bas.cge + bas.ct; // get
let cGet = bas.cGe + bas.ct; // Get
let cput = bas.cp + bas.cut; // put
let cPut = bas.cP + bas.cut; // Put
let cPUT = bas.cP + bas.cUT; // PUT
let cfrom = bas.cfr + bas.com; // from
let cFrom = bas.cFr + bas.com; // From
let cplace = phn.cplac + bas.ce; // place
let cPlace = bas.cPl + phn.cace; // Place
let cplaces = cplace + bas.cs; // places
let cPlaces = cPlace + bas.cs; // Places
let cplaced = cplace + bas.cd; // placed
let cPlaced = cPlace + bas.cd; // Placed
let cplacing = phn.cplac + phn.cing; // placing
let cPlacing = bas.cPl + bas.cac + phn.cing; // Placing
let cplacement = cplace + phn.cment; // placement
let cPlacement = cPlace + phn.cment; // Placement
let creplace = bas.cre + cplace; // replace
let cReplace = bas.cRe + cplace; // Replace
let creplaces = creplace + bas.cs; // replaces
let cReplaces = cReplace + bas.cs; // Replaces
let creplaced = creplace + bas.cd; // replaced
let cReplaced = cReplace + bas.cd; // Replaced
let creplacing = bas.cre + cplacing; // replacing
let cReplacing = bas.cRe + cplacing; // Replacing
let creplacement = creplace + phn.cment; // replacement
let cReplacement = cReplace + phn.cment; // Replacement
let cspace = bas.csp + phn.cace; // space
let cSpace = bas.cSp + phn.cace; // Space
let cspaces = cspace + bas.cs; // spaces
let cSpaces = cSpace + bas.cs; // Spaces
let cspaced = cspace + bas.cd; // spaced
let cSpaced = cSpace + bas.cd; // Spaced
let cplus = bas.cp + phn.clus; // plus
let cPlus = bas.cP + phn.clus; // Plus
let ccolon = bas.cco + phn.clon; // colon
let cColon = bas.cCo + phn.clon; // Colon
let cunder = bas.cun + phn.cder; // under
let cUnder = bas.cUn + phn.cder; // Under
let cscore = bas.cs + phn.ccore; // score
let cScore = bas.cS + phn.ccore; // Score
let cunderscore = cunder + cscore; // underscore
let cUnderscore = cUnder + cscore; // Underscore
let cCatagory = bas.cCa + bas.cta + bas.cgo + bas.cry; // Catagory
let cclean = bas.cc + phn.clean; // clean
let cClean = bas.cC + phn.clean; // Clean
let ccleaned = cclean + bas.ced; // cleaned
let cCleaned = cClean + bas.ced; // Cleaned
let cCarriage = bas.cCa + bas.crr + bas.ci + phn.cage; // Carriage
let cturn = bas.ctu + bas.crn; // turn
let creturn = bas.cre + cturn; // return
let cReturn = bas.cRe + cturn; // Return
let cconvert = bas.cc + phn.convert; // convert
let cConvert = bas.cC + phn.convert; // Convert
let clow = bas.clo + bas.cw; // low
let cLow = bas.cLo + bas.cw; // Low
let clower = clow + bas.cer; // lower
let cLower = cLow + bas.cer; // Lower
let ccase = bas.cc + phn.c_ase; // case
let cCase = bas.cC + phn.c_ase; // Case
let cmove = bas.cmo + bas.cve; // move
let cremove = bas.cre + cmove; // remove
let cRemove = bas.cRe + cmove; // Remove
let cExtension = phn.cExt + bas.cen + bas.cs + phn.cion; // Extension
let cdig = bas.cdi + bas.cg; // dig
let cDig = bas.cDi + bas.cg; // Dig
let cdigit = cdig + bas.cit; // digit
let cDigit = cDig + bas.cit; // Digit
let cletter = clet + bas.ct + bas.cer; // letter
let cLetter = cLet + bas.ct + bas.cer; // Letter
let cupper = bas.cup + bas.cp + bas.cer; // upper
let cUpper = bas.cUp + bas.cp + bas.cer; // Upper
let crandom = bas.cr + phn.candom; // random
let cRandom = bas.cR + phn.candom; // Random
let crandomly = crandom + bas.cly; // randomly
let cRandomly = cRandom + bas.cly; // Randomly
let cgenerate = bas.cg + phn.cenerate; // generate
let cGenerate = bas.cG + phn.cenerate; // Generate
let cgenerated = cgenerate + bas.cd; // generated
let cGenerated = cGenerate + bas.cd; // Generated
let cparent = bas.cp + phn.carent; // parent
let cParent = bas.cP + phn.carent; // Parent
let cvalue = bas.cva + bas.clu + bas.ce; // value
let cValue = bas.cVa + bas.clu + bas.ce; // Value
let cvalues = cvalue + bas.cs; // values
let cValues = cValue + bas.cs; // Values
let cfind = bas.cfi + bas.cnd; // find
let cFind = bas.cFi + bas.cnd; // Find
let cfindvalue = cfind + cvalue; // findvalue
let cfindValue = cfind + cValue; // findValue
let cFindValue = cFind + cValue; // FindValue
let crange = bas.cra + bas.cng + bas.ce; // range
let cRange = bas.cRa + bas.cng + bas.ce; // Range
let cnumeric = bas.cnu + bas.cme + bas.cri + bas.cc; // numeric
let cNumeric = bas.cNu + bas.cme + bas.cri + bas.cc; // Numeric
let cNumerical = cNumeric + bas.cal; // Numerical
let clength = bas.cle + bas.cng + bas.cth; // length
let cLength = bas.cLe + bas.cng + bas.cth; // Length
let ccode = bas.cco + bas.cde; // code
let cCode = bas.cCo + bas.cde; // Code
let ceither = bas.cei + phn.cther; // either
let cEither = bas.cEi + phn.cther; // Either
let cenable = bas.cen + phn.cable; // enable
let cEnable = bas.cEn + phn.cable; // Enable
let cenabled = cenable + bas.cd; // enabled
let cEnabled = cEnable + bas.cd; // Enabled
let cdetermine = bas.cd + phn.cetermine; // determine
let cDetermine = bas.cD + phn.cetermine; // Determine
let cties = bas.ct + phn.cies; // ties
let cTies = bas.cT + phn.cies; // Ties
let cability = bas.cab + phn.cility; // ability
let cAbility = bas.cAb + phn.cility; // Ability
let cabilities = bas.cab + phn.cili + cties; // abilities
let cAbilities = bas.cAb + phn.cili + cties; // Abilities
let cvariable = phn.cvar + bas.ci + phn.cable; // variable
let cVariable = phn.cVar + bas.ci + phn.cable; // Variable
let cvariables = cvariable + bas.cs; // variables
let cVariables = cVariable + bas.cs; // Variables
let cvariability = phn.cvar + bas.ci + cability; // variability
let cVariability = phn.cVar + bas.ci + cability; // Variability
let cvisibility = bas.cv + phn.cisibility; // visibility
let cVisibility = bas.cV + phn.cisibility; // Visibility
let cDialog = bas.cDi + bas.ca + clog; // Dialog
let clibrary = bas.cli + bas.cbr + bas.car + bas.cy; // library
let cLibrary = bas.cLi + bas.cbr + bas.car + bas.cy; // Library
let ctable = bas.cta + bas.cbl + bas.ce; // table
let cTable = bas.cTa + bas.cbl + bas.ce; // Table
let cequal = phn.cequ + bas.cal; // equal
let cEqual = phn.cEqu + bas.cal; // Equal
let cequals = cequal + bas.cs; // equals
let cEquals = cEqual + bas.cs; // Equals
let cequivalence = phn.cequ + bas.ci + phn.cval + phn.cence; // equivalence
let cEquivalence = phn.cEqu + bas.ci + phn.cval + phn.cence; // Equivalence
let cRaw = bas.cRa + bas.cw; // Raw
let cOperation = phn.cOperat + phn.cion; // Operation
let cOperating = phn.cOperat + phn.cing; // Operating
let csystem = bas.csy + bas.cst + bas.cem; // system
let cSystem = bas.cSy + bas.cst + bas.cem; // System
let csign = bas.csi + bas.cgn; // sign
let cSign = bas.cSi + bas.cgn; // Sign
let cassign = bas.cas + csign; // assign
let cAssign = bas.cAs + csign; // Assign
let cassignment = cassign + phn.cment; // assignment
let cAssignment = cAssign + phn.cment; // Assignment
let cAbreviated = bas.cAb + bas.cre + bas.cvi + bas.cat + bas.ced; // Abreviated
let cwait = bas.cw + phn.cait; // wait
let cWait = bas.cW + phn.cait; // Wait
let cawait = bas.ca + cwait; // await
let cHTML = bas.cHT + bas.cML; // HTML
let chtml = bas.cht + bas.cml; // html
let cinner = bas.ci + phn.cnner; // inner
let cInner = bas.cI + phn.cnner; // Inner
let cOver = bas.cOv + bas.cer; // Over
let cride = bas.cr + phn.cide; // ride
let cRide = bas.cR + phn.cide; // Ride
let cOverride = cOver + cride; // Override
let cActionOverride = cAction + cOverride; // ActionOverride
let cLocator = bas.cLo + bas.cca + bas.cto + bas.cr; // Locator
let cLocators = cLocator + bas.cs; // Locators
let cLocatorLibrary = cLocator + cLibrary; // LocatorLibrary
let cselector = bas.cs + phn.celector; // selector
let cSelector = bas.cS + phn.celector; // Selector
let cSelectors = cSelector + bas.cs; // Selectors
let cIndividual = bas.cIn + bas.cdi + bas.cvi + bas.cdu + bas.cal; // Individual
let cIndividually = cIndividual + bas.cly; // Individually
let cexist = bas.cex + phn.cist; // exist
let cExist = bas.cEx + phn.cist;; // Exist
let cexists = cexist + bas.cs; // exists
let cExists = cExist + bas.cs; // Exists
let cexisted = cexist + bas.ced; // existed
let cExisted = cExist + bas.ced; // Existed
let cexisting = cexist + phn.cing; // existing
let cExisting = cExist + phn.cing; // Existing
let cAsynch = bas.cAs + phn.cynch; // Asynch
let cSynch = bas.cS + phn.cynch; // Synch
let cSingular = bas.cSi + bas.cng + bas.cul + bas.car; // Singular
let cParallel = bas.cPa + bas.cra + bas.cll + bas.cel; // Parallel
let cMulti = bas.cMu + bas.clt + bas.ci; // Multi
let cUnified = bas.cUn + bas.cif + bas.cie + bas.cd; // Unified
let cfault = bas.cf + phn.cault; // fault
let cFault = bas.cF + phn.cault; // Fault
let cFAULT = bas.cF + phn.cAULT; // FAULT
let cdefault = bas.cde + cfault; // default
let cDefault = bas.cDe + cfault; // Default
let cDEFAULT = bas.cDE + cFAULT; // DEFAULT
let csingle = bas.cs + phn.cingle; // single
let cSingle = bas.cS + phn.cingle; // Single
let cquote = bas.cqu + phn.cote; // quote
let cQuote = bas.cQu + phn.cote; // Quote
let cquotes = cquote + bas.cs; // quotes
let cQuotes = cQuote + bas.cs; // Quotes
let cquoted = cquote + bas.cd; // quoted
let cQuoted = cQuote + bas.cd; // Quoted
let cswap = bas.cs + phn.cwap; // swap
let cSwap = bas.cS + phn.cwap; // Swap
let cbefore = bas.cbe + phn.cfore; // before
let cBefore = bas.cBe + phn.cfore; // Before
let cBEFORE = bas.cBE + phn.cFORE; // BEFORE
let cafter = bas.caf + phn.cter; // after
let cAfter = bas.cAf + phn.cter; // After
let cAFTER = bas.cAF + phn.cTER; // AFTER
let cOnce = bas.cOn + bas.cce; // Once
let cUpload = bas.cUp + cload; // Upload
let cStyle = bas.cSt + bas.cyl + bas.ce; // Style
let cassert = bas.cas + bas.cse + bas.crt; // assert
let cAssert = bas.cAs + bas.cse + bas.crt; // Assert
let cless = bas.cl + phn.cess; // less
let cLess = bas.cL + phn.cess; // Less
let cgreat = bas.cgr + phn.ceat; // great
let cGreat = bas.cGr + phn.ceat; // Great
let cgreater = cgreat + bas.cer; // greater
let cGreater = cGreat + bas.cer; // Greater
let cthen = bas.ct + phn.chen; // then
let cThen = bas.cT + phn.chen; // Then
let cthan = bas.ct + phn.chan; // than
let cThan = bas.cT + phn.chan; // Than
let cAssertExists = cAssert + cExists; // AssertExists
let cAssertNotExists = cAssert + gen.cNot + cExists; // AssertNotExists
let cAssertValueEqual = cAssert + cValue + cEqual; // AssertValueEqual
let cAssertValueNotEqual = cAssert + cValue + gen.cNot + cEqual; // AssertValueNotEqual
let cAssertValueLessThan = cAssert + cValue + cLess + cThan; // AssertValueLessThan
let cAssertValueGreaterThan = cAssert + cValue + cGreater + cThan; // AssertValueGreaterThan
let cAssertion = cAssert + phn.cion; // Assertion
let cAssertionType = cAssertion + cType; // AssertionType
let cUploadStyle = cUpload + cStyle; // UploadStyle
let cAssertionStyle = cAssertion + cStyle; // AssertionStyle
let cby = bas.cby; // by
let cBy = bas.cBy; // By
let cBY = bas.cBY; // BY
let cOr = bas.cOr; // Or
let cor = bas.cor; // or
let cOR = bas.cOR; // OR
let cmix = bas.camai + bas.cx; // mix // For some reason JavaScript doesn't like cmi.
let cMix = bas.cMi + bas.cx; // Mix
let cmixed = cmix + bas.ced; // mixed
let cMixed = cMix + bas.ced; // Mixed
let calpha = bas.ca + phn.clpha; // alpha
let cAlpha = bas.cA + phn.clpha; // Alpha
let cbetic = bas.cbe + bas.cti + bas.cc; // betic
let cAlphabetic = cAlpha + cbetic; // Alphabetic
let ctext = bas.ct + phn.cext; // text
let cText = bas.cT + phn.cext; // Text
let cTEXT = bas.cTE + bas.cXT; // TEXT
let ccontext = phn.ccon + ctext; // context
let cContext = phn.cCon + ctext; // Context
let cinput = bas.cin + cput; // input
let cInput = bas.cIn + cput; // Input
let cINPUT = bas.cIN + cPUT; // INPUT
let cinputs = cinput + bas.cs; // inputs
let cInputs = cInput + bas.cs; // Inputs
let cinputting = cinput + bas.ct + phn.cing; // inputting
let cInputting = cInput + bas.ct + phn.cing; // Inputting
let cdescription = bas.cde + bas.csc + bas.cri + bas.cp + phn.ction; // description
let cDescription = bas.cDe + bas.csc + bas.cri + bas.cp + phn.ction; // Description
let cconstant = phn.ccon + phn.cstant; //constant
let cConstant = phn.cCon + bas.cst + bas.can + bas.ct; // Constant
let cconstants = cconstant + bas.cs; // constants
let cConstants = cConstant + bas.cs; // Constants
let citeration = bas.cit + phn.cera + phn.ction; // iteration
let cIteration = bas.cIt + phn.cera + phn.ction; // Iteration
let cproject = bas.cp + phn.croject; // project
let cProject = bas.cP + phn.croject; // Project
let cProjects = cProject + bas.cs; // Projects
let cAdvance = bas.cAd + bas.cva + bas.cnc + bas.ce; // Advance
let cAdvanced = cAdvance + bas.cd; // Advanced
let cCreation = bas.cCr + bas.cea + phn.ction; // Creation
let ctestData = ctest + cData; // testData
let cpageData = cpage + cData; // pageData
let cPageData = cPage + cData; // PageData
let cTestName = cTest + cName; // TestName
let cPageName = cPage + cName; // PageName
let cbed = bas.cbe + bas.cd; // bed
let cBed = bas.cBe + bas.cd; // Bed
let cbeds = cbed + bas.cs; // beds
let cBeds = cBed + bas.cs; // Beds
let cbedded = cbed + phn.cded; // bedded
let cBedded = cBed + phn.cded; // Bedded
let cbedding = cbed + bas.cd + phn.cing; // bedding
let cBedding = cBed + bas.cd + phn.cing; // Bedding
let cweb = bas.cwe + bas.cb; // web
let cWeb = bas.cWe + bas.cb; // Web
let cwebs = cweb + bas.cs; // webs
let cWebs = cWeb + bas.cs; // Webs
let cwebbed = cweb + cbed; // webbed
let cWebbed = cWeb + cbed; // webbed
let cwebbing = cweb + phn.cbing; // webbing
let cWebbing = cWeb + phn.cbing; // Webbing
let cWebkey = bas.cWe + bas.cb + ckey; // Webkey
let cfile = bas.cf + phn.cile; // file
let cFile = bas.cF + phn.cile; // File
let cfiles = cfile + bas.cs; // files
let cFiles = cFile + bas.cs; // Files
let cfilename = cfile + cname; // filename
let cFilename = cFile + cname; // Filename
let cfilenames = cfilename + bas.cs; // filenames
let cFilenames = cFilename + bas.cs; // Filenames
let cfold = bas.cfo + bas.cld; // fold
let cFold = bas.cFo + bas.cld; // Fold
let cFolder = cFold + bas.cer; // Folder
let cfolder = cfold + bas.cer; // folder
let cfolders = cfolder + bas.cs; // folders
let cFolders = cFolder + bas.cs; // Folders
let ccafe = bas.cca + bas.cfe; // cafe
let ccert = bas.cce + bas.crt; // cert
let csrc = bas.csr + bas.cc; // src
let cbin = bas.cbi + bas.cn; // bin
let cnation = bas.cn + phn.cation; // nation
let cNation = bas.cN + phn.cation; // Nation
let csource = bas.cs + phn.cource; // source
let cSource = bas.cS + phn.cource; // Source
let cdestination = phn.cdest + bas.ci + cnation; // destination
let cDestination = phn.cDest + bas.ci + cnation; // Destination
let cresource = bas.cre + csource; // resource
let cResource = bas.cRe + csource; // Resource
let cresources = cresource + bas.cs; // resources
let cResources = cResource + bas.cs; // Resources
let cclass = bas.cc + phn.c_lass; // class
let cClass = bas.cC + phn.c_lass; // Class
let cIngestion = bas.cIn + bas.cge + bas.cs + phn.ction; // Ingestion
let cis = bas.cis; // is
let cIs = bas.cIs; // Is
let cIS = bas.cIS; // IS
let ccheck = bas.cc + phn.check; // check
let cCheck = bas.cC + phn.check; // Check
let cchecks = ccheck + bas.cs; // checks
let cChecks = cCheck + bas.cs; // Checks
let cchecked = ccheck + bas.ced; // checked
let cChecked = cCheck + bas.ced; // Checked
let celement = bas.cel + bas.ce + phn.cment; // element
let cElement = bas.cEl + bas.ce + phn.cment; // Element
let celements = celement + bas.cs; // elements
let cElements = cElement + bas.cs; // Elements
let cElementName = cElement + cName; // ElementName
let callow = call + bas.cow; // allow
let cAllow = cAll + bas.cow; // Allow
let callowable = callow + phn.cable; // allowable
let cAllowable = cAllow + phn.cable; // Allowable
let chome = bas.cho + bas.cme; // home
let cHome = bas.cHo + bas.cme; // Home
let cpublic = bas.cpu + bas.cbl + bas.cic; // public
let cPublic = bas.cPu + bas.cbl + bas.cic; // Public
let cspecial = bas.csp + bas.cec + bas.cia + bas.cl; // special
let cSpecial = bas.cSp + bas.cec + bas.cia + bas.cl; // Special
let ccharacter = cchar + bas.cac + phn.cter; // character
let cCharacter = cChar + bas.cac + phn.cter; // Character
let ccharacters = ccharacter + bas.cs; // characters
let cCharacters = cCharacter + bas.cs; // Characters
let cedge = bas.ced + bas.cge; // edge
let cEdge = bas.cEd + bas.cge; // Edge
let cWorks = cWork + bas.cs; // Works
let csolid = bas.cs + phn.colid; // solid
let cSolid = bas.cS + phn.colid; // Solid
let cBinary = bas.cBi + bas.cna + bas.cry; // Binary
let cTimeout = cTime + cout; // Timeout
let cTimeOut = cTime + cOut; // TimeOut
let cDwell = bas.cDw + bas.cel + bas.cl; // Dwell
let ccut = bas.ccu + bas.ct; // cut
let cCut = bas.cCu + bas.ct; // Cut
let ccuts = ccut + bas.cs; // cuts
let cCuts = cCut + bas.cs; // Cuts
let ccutting = ccut + bas.ct + phn.cing; // cutting
let cCutting = cCut + bas.ct + phn.cing; // Cutting
let ccute = bas.cc + phn.cute; // cute
let cCute = bas.cC + phn.cute; // Cute
let cexecute = gen.cexe + ccute; // execute
let cExecute = gen.cExe + ccute; // Execute
let cexecutes = cexecute + bas.cs; // executes
let cExecutes = cExecute + bas.cs; // Executes
let cexecuted = cexecute + bas.cd; // executed
let cExecuted = cExecute + bas.cd; // Executed
let cexecuting = gen.cexe + ccut + phn.cing; // executing
let cExecuting = gen.cExe + ccut + phn.cing; // Executing
let csibling = bas.cs + phn.cibling; // sibling
let cSibling = bas.cS + phn.cibling; // Sibling
let cchild = bas.cc + phn.child; // child
let cChild = bas.cC + phn.child; // Child
let cfilter = bas.cf + phn.cilter; // filter
let cFilter = bas.cF + phn.cilter; // Filter
let cattribute = bas.ca + phn.cttribute; // attribute
let cAttribute = bas.cA + phn.cttribute; // Attribute
let cattributes = bas.ca + phn.cttributes; // attributes
let cAttributes = bas.cA + phn.cttributes; // Attributes
let cdisabled = bas.cd + phn.cisabled; // disabled
let cDisabled = bas.cD + phn.cisabled; // Disabled
let cman = bas.cma + bas.cn; // man
let cMan = bas.cMa + bas.cn; // Man
let cwoman = bas.cwo + cman; // woman
let cWoman = bas.cWo + cman; // Woman
let ccell = bas.cc + phn.cell; // cell
let cCell = bas.cC + phn.cell; // Cell
let chung = bas.ch + phn.cung; // hung
let cHung = bas.cH + phn.cung; // Hung
let cport = bas.cpo + bas.crt; // port
let cPort = bas.cPo + bas.crt; // Port
let cConstructor = bas.cCo + bas.cns + bas.ctr + bas.cu + phn.cctor; // Constructor
let cwarn = bas.cw + phn.carn; // warn
let cWarn = bas.cW + phn.carn; // Warn
let cWARN = bas.cW + bas.cAR + bas.cN; // WARN
let cwarning = cwarn + phn.cing; // warning
let cWarning = cWarn + phn.cing; // Warning
let cWARNING = cWARN + phn.cING; // WARNING
let cwarnings = cwarning + bas.cs; // warnings
let cWarnings = cWarning + bas.cs; // Warnings
let cerror = bas.ce + phn.crror; // error
let cError = bas.cE + phn.crror; // Error
let cERROR = bas.cE + phn.cRROR; // ERROR
let cash = bas.cas + bas.ch; // ash
let cAsh = bas.cAs + bas.ch; // Ash
let cdash = bas.cd + cash; // dash
let cDash = bas.cD + cash; // Dash
let cboard = bas.cbo + phn.card; // board
let cDashboard = cDash + cboard; // Dashboard
let ccompose = bas.cco + bas.cmp + phn.cose; // compose
let cdecompose = bas.cde + ccompose; // decompose
let cDecompose = bas.cDe + ccompose; // Decompose
let carray = bas.car + phn.cray; // array
let cArray = bas.cAr + phn.cray; // Array
let carrays = carray + bas.cs; // arrays
let cArrays = cArray + bas.cs; // Arrays
let ccamel = bas.cca + phn.cmel; // camel
let cCamel = bas.cCa + phn.cmel; // Camel
let cround = bas.cr + phn.cound; // round
let cRound = bas.cR + phn.cound; // Round
let crounded = cround + bas.ced; // rounded
let cRounded = cRound + bas.ced; // Rounded
let cquart = bas.cqu + phn.cart; // quart
let cQuart = bas.cQu + phn.cart; // Quart
let cquarter = cquart + bas.cer; // quarter
let cQuarter = cQuart + bas.cer; // Quarter
let cquaternion = bas.cqu + bas.cat + bas.cer + phn.cnion; // quaternion
let cQuaternion = bas.cQu + bas.cat + bas.cer + phn.cnion; // Quaternion
let cnormal = bas.cn + phn.cormal; // normal
let cNormal = bas.cN + phn.cormal; // Normal
let cnormalize = cnormal + phn.cize; // normalize
let cNormalize = cNormal + phn.cize; // Normalize
let cnominal = phn.cnom + phn.cinal; // nominal
let cNominal = phn.cNom + phn.cinal; // Nominal
let cdegree = bas.cd + phn.cegree; // degree
let cDegree = bas.cD + phn.cegree; // Degree
let cdegrees = cdegree + bas.cs; // degrees
let cDegrees = cDegree + bas.cs; // Degrees
let cangle = bas.can + phn.cgle; // angle
let cAngle = bas.cAn + phn.cgle; // Angle
let ctrap = bas.ct + phn.crap; // trap
let cTrap = bas.cT + phn.crap; // Trap
let cFraction = phn.cFra + phn.cction; // Fraction
let cvector = bas.cve + phn.cctor; // vector
let cVector = bas.cVe + phn.cctor; // Vector
let cfor = bas.cfo + bas.cr; // for
let cFor = bas.cFo + bas.cr; // For
let cform = cfor + bas.cm; // form
let cForm = cFor + bas.cm; // Form
let ctransform = phn.ctrans + cform; // transform
let cTransform = phn.cTrans + cform; // Transform
let cpoint = bas.cpo + phn.cint; // point
let cPoint = bas.cPo + phn.cint; // Point
let clocation = phn.cloc + phn.cation; // location
let cLocation = phn.cLoc + phn.cation; // Location
let csort = bas.cs + phn.cort; // sort
let cSort = bas.cS + phn.cort; // Sort
let csimplify = phn.csim + phn.cplify; // simplify
let cSimplify = phn.cSim + phn.cplify; // Simplify
let cconsolidate = phn.ccon + phn.csol + bas.ci + cdate; // consolidate
let cConsolidate = phn.cCon + phn.csol + bas.ci + cdate; // Consolidate
let cconsolidated = cconsolidate + bas.cd; // consolidated
let cConsolidated = cConsolidate + bas.cd; // Consolidated
let cconsolidates = cconsolidate + bas.cs; // consolidates
let cConsolidates = cConsolidate + bas.cs; // Consolidates
let cconsolidating = phn.ccon + csolid + bas.cat + phn.cing; // consolidating
let cConsolidating = phn.cCon + csolid + bas.cat + phn.cing; // Consolidating
let care = phn.care; // are
let cAre = bas.cAr + bas.ce; // Are
let cARE = bas.cAR + bas.cE; // ARE
let ccompare = phn.ccomp + phn.care; // compare
let cCompare = phn.cComp + phn.care; // Compare
let ccompares = ccompare + bas.cs; // compares
let cCompares = cCompare + bas.cs; // Compares
let ccompared = ccompare + bas.cd; // compared
let cCompared = cCompare + bas.cd; // Compared
let ccomparing = phn.ccomp + bas.car + phn.cing; // comparing
let cComparing = phn.cComp + bas.car + phn.cing; // Comparing
let ccomparison = phn.ccomp + bas.car + phn.cison; // comparison
let cComparison = phn.cComp + bas.car + phn.cison; // Comparison
let ccomparisons = ccomparison + bas.cs; // comparisons
let cComparisons = cComparison + bas.cs; // Comparisons
let ccontain = phn.ccon + phn.ctain; // contain
let cContain = phn.cCon + phn.ctain; // Contain
let ccontains = ccontain + bas.cs; // contains
let cContains = cContain + bas.cs; // Contains
let ccontained = ccontain + bas.ced; // contained
let cContained = cContain + bas.ced; // Contained
let ccontaining = ccontain + phn.cing; // containing
let cContaining = cContain + phn.cing; // Containing
let cvideo = bas.cv + phn.cideo; // video
let cVideo = bas.cV + phn.cideo; // Video
let cProduct = phn.cPro + phn.cduct; // Product
let caggregate = bas.ca + phn.cggregate; // aggregate
let cAggregate = bas.cA + phn.cggregate; // Aggregate
let carguments = bas.ca + bas.crg + bas.cu + phn.cments; // arguments
let cArguments = bas.cA + bas.crg + bas.cu + phn.cments; // Arguments
let cDifference = phn.cDiff + bas.cer + phn.cence; // Difference
let cbet = bas.cbe + bas.ct; // bet
let cBet = bas.cBe + bas.ct; // Bet
let cbetween = cbet + phn.cween; // between
let cBetween = cBet + phn.cween; // Between
let ccertain = bas.cce + bas.crt + phn.cain; // certain
let cascertain = bas.cas + ccertain; // ascertain
let cAscertain = bas.cAs + ccertain; // Ascertain
let cmatch = bas.cma + phn.ctch; // match
let cMatch = bas.cMa + phn.ctch; // Match
let cmatching = cmatch + phn.cing; // matching
let cMatching = cMatch + phn.cing; // Matching
let cdoes = bas.cdo + bas.ces; // does
let cDoes = bas.cDo + bas.ces; // Does
let cDOES = bas.cDO + bas.cES; // DOES
let capplication = phn.capp + phn.clica + phn.ction; // application
let cApplication = phn.cApp + phn.clica + phn.ction; // Application
let cAPPLICATION = phn.cAPP + phn.cLICA + phn.cTION; // APPLICATION
let cbuild = bas.cbu + phn.cild; // build
let cBuild = bas.cBu + phn.cild; // Build
let cdeploy = bas.cd + bas.cep + phn.cloy; // deploy
let cDeploy = bas.cD + bas.cep + phn.cloy; // Deploy
let cDEPLOY = bas.cD + bas.cEP + phn.cLOY; // DEPLOY
let cdeployment = cdeploy + phn.cment; // deployment
let cDeployment = cDeploy + phn.cment; // Deployment
let clease = bas.cle + phn.c_ase; // lease
let cLEASE = bas.cLE + phn.c_ASE; // LEASE
let crelease = bas.cre + clease; // release
let cRelease = bas.cRe + clease; // Release
let cRELEASE = bas.cRE + cLEASE; // RELEASE
let creleases = crelease + bas.cs; // releases
let cReleases = cRelease + bas.cs; // Releases
let creleased = crelease + bas.cd; // released
let cReleased = cRelease + bas.cd; // Released
let creleasing = bas.cre + phn.cleas + phn.cing; // releasing
let cReleasing = bas.cRe + phn.cleas + phn.cing; // Releasing
let croot = bas.cr + phn.coot; // root
let cRoot = bas.cR + phn.coot; // Root
let cparse = bas.cp + phn.carse; // parse
let cParse = bas.cP + phn.carse; // Parse
let cPARSE = bas.cP + phn.cARSE; // PARSE
let cparser = cparse + bas.cr; // parser
let cParser = cParse + bas.cr; // Parser
let cPARSER = cPARSE + bas.cR; // PARSER
let cparsed = cparse + bas.cd; // parsed
let cParsed = cParse + bas.cd; // Parsed
let cparsing = bas.cp + phn.cars + phn.cing; // parsing
let cParsing = bas.cP + phn.cars + phn.cing; // Parsing
let cforward = cfor + phn.cward; // forward
let cForward = cFor + phn.cward; // Forward
let cslash = bas.cs + phn.clash; // slash
let cSlash = bas.cS + phn.clash; // Slash
let cmeta = bas.cm + phn.ceta; // meta
let cMeta = bas.cM + phn.ceta; // Meta
let cmetaData = cmeta + cData; // metaData
let cMetaData = cMeta + cData; // MetaData
let cbusiness = bas.cb + phn.cusiness; // business
let cBusiness = bas.cB + phn.cusiness; // Business
let crule = bas.cr + phn.cule; // rule
let cRule = bas.cR + phn.cule; // Rule
let cfresh = bas.cfr + phn.cesh; // fresh
let crefresh = bas.cre + cfresh; // refresh
let cRefresh = bas.cRe + cfresh; // Refresh
let ceval = bas.ce + phn.cval; // eval
let cEval = bas.cE + phn.cval; // Eval
let creload = bas.cre + cload; // reload
let cReload = bas.cRe + cload; // Reload
let cdemo = bas.cd + phn.cemo; // demo
let cDemo = bas.cD + phn.cemo; // Demo
let ccommon = bas.cc + phn.common; // common
let cCommon = bas.cC + phn.common; // Common
let cfunction = bas.cf + bas.cun + phn.cction; // function
let cFunction = bas.cF + bas.cun + phn.cction; // Function
let cfunctions = cfunction + bas.cs; // functions
let cFunctions = cFunction + bas.cs; // Functions
let cmultiple = phn.cmulti + phn.cple; // multiple
let cMultiple = phn.cMulti + phn.cple; // Multiple
let cJournal = bas.cJo + bas.cur + phn.cnal; // Journal
let cExecution = phn.cExe + bas.ccu + phn.ction; // Execution
let cpercent = phn.cper + phn.ccent; // percent
let cPercent = phn.cPer + phn.ccent; // Percent
let cbasic = bas.cb + phn.casic; // basic
let cBasic = bas.cB + phn.casic; // Basic
let codd = bas.cod + bas.cd; // odd
let cOdd = bas.cOd + bas.cd; // Odd
let ceven = bas.ce + phn.cven; // even
let cEven = bas.cE + phn.cven; // Even
let cEVEN = bas.cE + phn.cVEN; // EVEN
let cevent = bas.ce + phn.cvent; // event
let cEvent = bas.cE + phn.cvent; // Event
let cevents = cevent + bas.cs; // events
let cEvents = cEvent + bas.cs; // Events
let cface = bas.cfa + bas.cce; // face
let cFace = bas.cFa + bas.cce; // Face
let cargument = phn.carg + bas.cu + phn.cment; // argument
let cArgument = phn.cArg + bas.cu + phn.cment; // Argument
let cdrive = bas.cd + phn.crive; // drive
let cDrive = bas.cD + phn.crive; // Drive
let cdriven = cdrive + bas.cn; // driven
let cDriven = cDrive + bas.cn; // Driven
let cinterface = phn.cinter + cface; // interface
let cInterface = phn.cInter + cface; // Interface
let cfont = bas.cf + phn.cont; // font
let cFont = bas.cF + phn.cont; // Font
let cmodule = phn.cmod + phn.cule; // module
let cModule = phn.cMod + phn.cule; // Module
let ccolor = phn.ccol + bas.cor; // color
let cColor = phn.cCol + bas.cor; // Color
let ccolors = ccolor + bas.cs; // colors
let cColors = cColor + bas.cs; // Colors
let ccolored = ccolor + bas.ced; // colored
let cColored = cColor + bas.ced; // Colored
let ccolorize = ccolor + phn.cize; // colorize
let cColorize = cColor + phn.cize; // Colorize
let ccolorized = ccolorize + bas.cd; // colorized
let cColorized = cColorize + bas.cd; // Colorized
let cold = bas.col + bas.cd; // old
let cOld = bas.cOl + bas.cd; // Old
let cbold = bas.cb + cold; // bold
let cBold = bas.cB + cold; // Bold
let cmost = bas.cm + phn.cost; // most
let cMost = bas.cM + phn.cost; // Most
let cpop = bas.cpo + bas.cp; // pop
let cPop = bas.cPo + bas.cp; // Pop
let cPOP = bas.cPO + bas.cP; // POP
let cpopular = cpop + phn.cular; // popular
let cPopular = cPop + phn.cular; // Popular
let calmost = bas.cal + cmost; // almost
let cAlmost = bas.cAl + cmost; // Almost
let cpal = bas.cpa + bas.cl; // pal
let cPal = bas.cPa + bas.cl; // Pal
let cpalindrome = cpal + bas.cin + phn.cdrome; // palindrome
let cPalindrome = cPal + bas.cin + phn.cdrome; // Palindrome
let caverage = phn.cave + phn.crage; // average
let cAverage = phn.cAve + phn.crage; // Average
let cclient = phn.ccli + phn.cent; // client
let cClient = phn.cCli + phn.cent; // Client
let crules = bas.cr + phn.cules; // rules
let cRules = bas.cR + phn.cules; // Rules
let ccustom = phn.ccust + bas.com; // custom
let cCustom = phn.cCust + bas.com; // Custom
let ccommand = phn.ccom + phn.cmand; // command
let cCommand = phn.cCom + phn.cmand; // Command
let cCOMMAND = phn.cCOM + phn.cMAND; // COMMAND
let ccommands = ccommand + bas.cs; // commands
let cCommands = cCommand + bas.cs; // Commands
let cqueue = bas.cqu + bas.ceu + bas.ce; // queue
let cQueue = bas.cQu + bas.ceu + bas.ce; // Queue
let cblob = bas.cb + phn.clob; // blob
let cBlob = bas.cB + phn.clob; // Blob
let cframe = bas.cf + phn.crame; // frame
let cFrame = bas.cF + phn.crame; // Frame
let calias = bas.cal + phn.cias; // alias
let cAlias = bas.cAl + phn.cias; // Alias
let caliases = calias + bas.ces; // aliases
let cAliases = cAlias + bas.ces; // Aliases
let csequencer = phn.cseq + bas.cue + phn.cncer; // sequencer
let cSequencer = phn.cSeq + bas.cue + phn.cncer; // Sequencer
let cprimary = phn.cpri + phn.cmary; // primary
let cPrimary = phn.cPri + phn.cmary; // Primary
let csecondary = unt.csecond + phn.cary; // secondary
let cSecondary = unt.cSecond + phn.cary; // Secondary
let ctertiary = phn.ctert + phn.ciary; // tertiary
let cTertiary = phn.cTert + phn.ciary; // Tertiary
let cdelimit = bas.cde + climit; // delimit
let cDelimit = bas.cDe + climit; // Delimit
let cdelimiter = cdelimit + bas.cer; // delimiter
let cDelimiter = cDelimit + bas.cer; // Delimiter
let cdelimiters = cdelimiter + bas.cs; // delimiters
let cDelimiters = cDelimiter + bas.cs; // Delimiters
let cdelimited = cdelimit + bas.ced; // delimited
let cDelimited = cDelimit + bas.ced; // Delimited
let cdelimiting = cdelimit + phn.cing; // delimiting
let cDelimiting = cDelimit + phn.cing; // Delimiting
let chelp = bas.che + bas.clp; // help
let cHelp = bas.cHe + bas.clp; // Help
let cprint = bas.cp + phn.crint; // print
let cPrint = bas.cP + phn.crint; // Print
let chive = bas.ch + phn.cive; // hive
let cHive = bas.cH + phn.cive; // Hive
let cgenerator = phn.cgen + bas.cer + phn.cator; // generator
let cGenerator = phn.cGen + bas.cer + phn.cator; // Generator
let cindex = bas.cin + phn.cdex; // index
let cIndex = bas.cIn + phn.cdex; // Index
let cabout = bas.ca + phn.cbout; // about
let cAbout = bas.cA + phn.cbout; // About
let cstart = bas.cs + phn.ctart; // start
let cStart = bas.cS + phn.ctart; // Start
let cstarts = cstart + bas.cs; // starts
let cStarts = cStart + bas.cs; // Starts
let cstarted = cstart + bas.ced; // started
let cStarted = cStart + bas.ced; // Started
let cstartup = cstart + bas.cup; // startup
let cstarting = cstart + phn.cing; // starting
let cStarting = cStart + phn.cing; // Starting
let coutput = cout + cput; // output
let cOutput = cOut + cput; // Output
let cmetric = phn.cmet + phn.cric; // metric
let cMetric = phn.cMet + phn.cric; // Metric
let cmetrics = cmetric + bas.cs; // metrics
let cMetrics = cMetric + bas.cs; // Metrics
let crack = bas.cr + phn.cack; // rack
let cRack = bas.cR + phn.cack; // Rack
let ctrack = bas.ct + crack; // track
let cTrack = bas.cT + crack; // Track
let ctracking = ctrack + phn.cing; // tracking
let cTracking = cTrack + phn.cing; // Tracking
let cstack = bas.cst + phn.cack; // stack
let cStack = bas.cSt + phn.cack; // Stack
let cstandard = bas.cst + cand + phn.card; // standard
let cStandard = bas.cSt + cand + phn.card; // Standard
let cdeviation = phn.cdev + bas.cia + phn.ction; // deviation
let cDeviation = phn.cDev + bas.cia + phn.ction; // Deviation
let canalysis = phn.cana + bas.cly + phn.csis; // analysis
let cAnalysis = phn.cAna + bas.cly + phn.csis; // Analysis
let cclear = bas.ccl + phn.cear; // clear
let cClear = bas.cCl + phn.cear; // Clear
let cversion = phn.cver + phn.csion; // version
let cVersion = phn.cVer + phn.csion; // Version
let ccontrol = phn.ccon + phn.ctrol; // control
let cControl = phn.cCon + phn.ctrol; // Control
let ccontrols = ccontrol + bas.cs; // controls
let cControls = cControl + bas.cs; // Controls
let ccontrolled = ccontrol + phn.cled; // controlled
let cControlled = cControl + phn.cled; // Controlled
let ccontrolling = ccontrol + phn.cling; // controlling
let cControlling = cControl + phn.cling; // Controlling
let ccontroller = ccontrol + phn.cler; // controller
let cController = cControl + phn.cler; // Controller
let ccontrollers = ccontroller + bas.cs; // controllers
let cControllers = cController + bas.cs; // Controllers
let cperform = phn.cper + cform; // perform
let cPerform = phn.cPer + cform; // Perform
let cperformance = cperform + phn.cance; // performance
let cPerformance = cPerform + phn.cance; // Performance
let cconversion = phn.ccon + cversion; // conversion
let cConversion = phn.cCon + cversion; // Conversion
let cpass = bas.cp + phn.cass; // pass
let cPass = bas.cP + phn.cass; // Pass
let cPASS = bas.cP + phn.cASS; // PASS
let cpassed = cpass + bas.ced; // passed
let cPassed = cPass + bas.ced; // Passed
let cPASSED = cPASS + bas.cED; // PASSED
let cpassing = cpass + phn.cing; // passing
let cPassing = cPass + phn.cing; // Passing
let cbypass = bas.cby + cpass; // bypass
let cBypass = bas.cBy + cpass; // Bypass
let cbypasses = cbypass + bas.ces; // bypasses
let cBypasses = cBypass + bas.ces; // Bypasses
let cbypassed = cbypass + bas.ced; // bypassed
let cBypassed = cBypass + bas.ced; // Bypassed
let cbypassing = cbypass + phn.cing; // bypassing
let cBypassing = cBypass + phn.cing; // Bypassing
let cfail = bas.cf + phn.cail; // fail
let cFail = bas.cF + phn.cail; // Fail
let cFAIL = bas.cF + phn.cAIL; // FAIL
let cfailed = cfail + bas.ced; // failed
let cFailed = cFail + bas.ced; // Failed
let cFAILED = cFAIL + bas.cED; // FAILED
let cfailure = cfail + phn.cure; // failure
let cFailure = cFail + phn.cure; // Failure
let csimplified = phn.csim + bas.cpl + phn.cified; // simplified
let cSimplified = phn.cSim + bas.cpl + phn.cified; // Simplified
let ctraditional = phn.ctrad + bas.ci + phn.ctional; // traditional
let cTraditional = phn.cTrad + bas.ci + phn.ctional; // Traditional
let cground = bas.cgr + phn.cound; // ground
let cGround = bas.cGr + phn.cound; // Ground
let cyell = bas.cye + bas.cll; // yell
let cYell = bas.cYe + bas.cll; // Yell
let clack = bas.cla + bas.cck; // lack
let cLack = bas.cLa + bas.cck; // Lack
let clane = bas.cl + phn.cane; // lane
let cLane = bas.cL + phn.cane; // Lane
let csection = phn.csec + phn.ction; // section
let cSection = phn.cSec + phn.ction; // Section
let csections = csection + bas.cs; // sections
let cSections = cSection + bas.cs; // Sections
let cunit = phn.cuni + bas.ct; // unit
let cUnit = phn.cUni + bas.ct; // Unit
let cunits = cunit + bas.cs;
let cUnits = cUnit + bas.cs;
let cgeneric = phn.cgen + bas.ce + phn.cric; // generic
let cGeneric = phn.cGen + bas.ce + phn.cric; // Generic
let cisotope = phn.ciso + phn.ctope; // isotope
let cIsotope = phn.cIso + phn.ctope; // Isotope
let cphonic = phn.cphon + bas.cic; // phonic
let cPhonic = phn.cPhon + bas.cic; // Phonic
let cphonics = cphonic + bas.cs; // phonics
let cPhonics = cPhonic + bas.cs; // Phonics
let cshape = phn.csha + bas.cpe; // shape
let cShape = phn.cSha + bas.cpe; // Shape
let cexport = bas.cex + cport; // export
let cExport = bas.cEx + cport; // Export
let cplay = bas.cp + phn.clay; // play
let cPlay = bas.cP + phn.clay; // Play
let cdisplay = bas.cd + bas.cis + cplay; // display
let cDisplay = bas.cD + bas.cis + cplay; // Display
let csum = bas.csu + bas.cm; // sum
let cSum = bas.cSu + bas.cm; // Sum
let csummary = csum + phn.cmary; // summary
let cSummary = cSum + phn.cmary; // Summary
let csuggest = phn.csug + phn.cgest; // suggest
let cSuggest = phn.cSug + phn.cgest; // Suggest
let csuggested = csuggest + bas.ced; // suggested
let cSuggested = cSuggest + bas.ced; // Suggested
let cline = bas.cli + bas.cne; // line
let cLine = bas.cLi + bas.cne; // Line
let cdocument = gen.cdoc + bas.cu + phn.cment; // document
let cDocument = gen.cDoc + bas.cu + phn.cment; // Document
let cqualified = bas.cq + phn.cual + phn.cified; // qualified
let cQualified = bas.cQ + phn.cual + phn.cified; // Qualified
let cfix = bas.cf + bas.cix; // fix
let cFix = bas.cF + bas.cix; // Fix
let cprefix = phn.cpre + cfix; // prefix
let cPrefix = phn.cPre + cfix; // Prefix
let csuffix = phn.csuf + cfix; // suffix
let cSuffix = phn.cSuf + cfix; // Suffix
let cdevelop = phn.cdev + bas.ce + phn.clop; // develop
let cDevelop = phn.cDev + bas.ce + phn.clop; // Develop
let cDEVELOP = phn.cDEV + bas.cE + phn.cLOP; // DEVELOP
let cdevelopment = cdevelop + phn.cment; // development
let cDevelopment = cDevelop + phn.cment; // Development
let cDEVELOPMENT = cDEVELOP + phn.cMENT; // DEVELOPMENT
let cproduction = phn.cprod + bas.cuc + phn.ction; // production
let cProduction = phn.cProd + bas.cuc + phn.ction; // Production
let cPRODUCTION = phn.cPROD + bas.cUC + phn.cTION; // PRODUCTION
let cstorage = phn.cstor + phn.cage; // storage
let cStorage = phn.cStor + phn.cage; // Storage
let cstore = phn.cstor + bas.ce; // store
let cStore = phn.cStor + bas.ce; // Store
let cstored = phn.cstor + bas.ced; // stored
let cStored = phn.cStor + bas.ced; // Stored
let cunique = phn.cuni + phn.cque; // unique
let cUnique = phn.cUni + phn.cque; // Unique
let cduplicate = phn.cdup + bas.cli + phn.ccate; // duplicate
let cDuplicate = phn.cDup + bas.cli + phn.ccate; // Duplicate
let cplease = bas.cpl + phn.cease; // please
let cPlease = bas.cPl + phn.cease; // Please
let center = bas.cen + phn.cter; // enter
let cEnter = bas.cEn + phn.cter; // Enter
let centers = center + bas.cs; // enters
let cEnters = cEnter + bas.cs; // Enters
let centered = center + bas.ced; // entered
let cEntered = cEnter + bas.ced; // Entered
let centering = center + phn.cing; // entering
let cEntering = cEnter + phn.cing; // Entering
let cwere = bas.cw + phn.cere; // were
let cWere = bas.cW + phn.cere; // Were
let cwhere = bas.cwh + phn.cere; // where
let cWhere = bas.cWh + phn.cere; // Where
let cher = bas.che + bas.cr; // her
let cHer = bas.cHe + bas.cr; // Her
let chim = bas.chi + bas.cm; // him
let cHim = bas.cHi + bas.cm; // Him
let chers = cher + bas.cs; // hers
let cHers = cHer + bas.cs; // Hers
let chis = bas.chi + bas.cs; // his
let cHis = bas.cHi + bas.cs; // His
let cthem = bas.cth + bas.cem; // them
let cThem = bas.cTh + bas.cem; // Them
let cthose = bas.cth + phn.cose; // those
let cThose = bas.cTh + phn.cose; // Those
let cthat = bas.cth + bas.cat; // that
let cThat = bas.cTh + bas.cat; // That
let cthis = bas.ct + chis; // this
let cThis = bas.cT + chis; // This
let cwhen = bas.cwh + bas.cen; // when
let cWhen = bas.cWh + bas.cen; // When
let cwhat = bas.cwh + bas.cat; // what
let cWhat = bas.cWh + bas.cat; // What
let chow = bas.cho + bas.cw; // how
let cHow = bas.cHo + bas.cw; // How
let cwhy = bas.cwh + bas.cy; // why
let cWhy = bas.cWh + bas.cy; // Why
let cother = bas.cot + cher; // other
let cOther = bas.cOt + cher; // Other
let cabreviation = bas.cab + phn.crev + bas.cia + phn.ction; // abreviation
let cAbreviation = bas.cAb + phn.crev + bas.cia + phn.ction; // Abreviation
let cabreviations = cabreviation + bas.cs; // abreviations
let cAbreviations = cAbreviation + bas.cs; // Abreviations
let cacronym = bas.cac + phn.cron + bas.cym; // acronym
let cAcronym = bas.cAc + phn.cron + bas.cym; // Acronym
let cacronyms = cacronym + bas.cs; // acronyms
let cAcronyms = cAcronym + bas.cs; // Acronyms
let csolve = bas.cs + phn.colve; // solve
let cSolve = bas.cS + phn.colve; // Solve
let cLehmer = bas.cLe + bas.chm + bas.cer; // Lehmer
let cdeep = bas.cd + phn.ceep; // deep
let cDeep = bas.cD + phn.ceep; // Deep
let cclone = bas.ccl + num.cone; // clone
let cClone = bas.cCl + num.cone; // Clone
let ccursive = phn.ccur + phn.csive; // cursive
let cCursive = phn.cCur + phn.csive; // Cursive
let crecursive = bas.cre + ccursive; // recursive
let cRecursive = bas.cRe + ccursive; // Recursive
let cexpansion = phn.cexp + bas.can + phn.csion; // expansion
let cExpansion = phn.cExp + bas.can + phn.csion; // Expansion
let cscreen = bas.csc + phn.creen; // screen
let cScreen = bas.cSc + phn.creen; // Screen
let cyou = bas.cyo + bas.cu; // you
let cYou = bas.cYo + bas.cu; // You
let cwould = bas.cw + phn.could; // would
let cWould = bas.cW + phn.could; // Would
let cshould = bas.csh + phn.could; // should
let cShould = bas.cSh + phn.could; // Should
let ccould = bas.cc + phn.could; // could
let cCould = bas.cC + phn.could; // Could
let clike = bas.cl + phn.cike; // like
let cLike = bas.cL + phn.cike; // Like
let cfine = bas.cf + phn.cine; // fine
let cFine = bas.cF + phn.cine; // Fine
let cdefine = bas.cde + cfine; // define
let cDefine = bas.cDe + cfine; // Define
let cdefined = cdefine + bas.cd; // defined
let cDefined = cDefine + bas.cd; // Defined
let cdefines = cdefine + bas.cs; // defines
let cDefines = cDefine + bas.cs; // Defines
let cdefining = bas.cde + phn.cfin + phn.cing; // defining
let cDefining = bas.cDe + phn.cfin + phn.cing; // Defining
let cfill = bas.cf + phn.cill; // fill
let cFill = bas.cF + phn.cill; // Fill
let cfulfillment = phn.cful + cfill + phn.cment; // fulfillment
let cFulfillment = phn.cFul + cfill + phn.cment; // Fulfillment
let coptimized = phn.copt + bas.cim + phn.cized; // optimized
let cOptimized = phn.cOpt + bas.cim + phn.cized; // Optimized
let csome = bas.cs + phn.come; // some
let cSome = bas.cS + phn.come; // Some
let ccomb = bas.cc + phn.comb; // comb
let cComb = bas.cC + phn.comb; // Comb
let ccombine = ccomb + phn.cine; // combine
let cCombine = cComb + phn.cine; // Combine
let ccombines = ccombine + bas.cs; // combines
let cCombines = cCombine + bas.cs; // Combines
let ccombined = ccombine + bas.cd; // combined
let cCombined = cCombine + bas.cd; // Combined
let ccombining = ccomb + bas.cin + phn.cing; // combining
let cCombining = cComb + bas.cin + phn.cing; // Combining
let crecombine = bas.cre + ccombine; // recombine
let cRecombine = bas.cRe + ccombine; // Recombine
let ccombination = ccomb + bas.cin + phn.cation; // combination
let cCombination = cComb + bas.cin + phn.cation; // Combination
let ccombinations = ccombination + bas.cs; // combinations
let cCombinations = cCombination + bas.cs; // Combinations
let crecognizer = phn.crec + bas.cog + bas.cn + phn.cizer; // recognizer
let cRecognizer = phn.cRec + bas.cog + bas.cn + phn.cizer; // Recognizer
let cpat = bas.cpa + bas.ct; // pat
let cPat = bas.cPa + bas.ct; // Pat
let cpatt = cpat + bas.ct; // patt
let cPatt = cPat + bas.ct; // Patt
let cpattern = cpatt + phn.cern; // pattern
let cPattern = cPatt + phn.cern; // Pattern
let cpatterns = cpattern + bas.cs; // patterns
let cPatterns = cPattern + bas.cs; // Patterns
let ccoma = gen.ccom + bas.ca; // coma
let cComa = gen.cCom + bas.ca; // Coma
let ccomas = ccoma + bas.cs; // comas
let cComas = cComa + bas.cs; // Comas
let cseparate = bas.cse + bas.cpa + phn.crate; // separate
let cSeparate = bas.cSe + bas.cpa + phn.crate; // Separate
let cseparated = cseparate + bas.cd; // separated
let cSeparated = cSeparate + bas.cd; // Separated
let csea = bas.cse + bas.ca; // sea
let cSea = bas.cSe + bas.ca; // Sea
let csearch = csea + phn.crch; // search
let cSearch = cSea + phn.crch; // Search
let csearches = csearch + bas.ces; // searches
let cSearches = cSearch + bas.ces; // Searches
let csearched = csearch + bas.ced; // searched
let cSearched = cSearch + bas.ced; // Searched
let csearching = csearch + phn.cing; // searching
let cSearching = cSearch + phn.cing; // Searching
let cneed = bas.cn + phn.ceed; // need
let cNeed = bas.cN + phn.ceed; // Need
let cimplement = bas.cim + phn.cple + phn.cment; // implement
let cImplement = bas.cIm + phn.cple + phn.cment; // Implement
let cimplements = cimplement + bas.cs; // implements
let cImplements = cImplement + bas.cs; // Implements
let cimplementation = cimplement + phn.cation; // implementation
let cImplementation = cImplement + phn.cation; // Implementation
let cgoing = bas.cgo + phn.cing; // going
let cGoing = bas.cGo + phn.cing; // Going
let cmain = bas.cm + phn.cain; // main
let cMain = bas.cM + phn.cain; // Main
let cprogram = phn.cpro + bas.cg + phn.cram; // program
let cProgram = phn.cPro + bas.cg + phn.cram; // Program
let cloop = bas.cl + phn.coop; // loop
let cLoop = bas.cL + phn.coop; // Loop
let cgood = bas.cg + phn.cood; // good
let cGood = bas.cG + phn.cood; // Good
let cbye = bas.cby + bas.ce; // bye
let cBye = bas.cBy + bas.ce; // Bye
let chave = bas.ch + phn.cave; // have
let cHave = bas.cH + phn.cave; // Have
let cnice = bas.cn + phn.cice; // nice
let cNice = bas.cN + phn.cice; // Nice
let cday = bas.cda + bas.cy; // day
let cDay = bas.cDa + bas.cy; // Day
let cstay = bas.cs + phn.ctay; // stay
let cStay = bas.cS + phn.ctay; // Stay
let csafe = bas.cs + phn.cafe; // safe
let cSafe = bas.cS + phn.cafe; // Safe
let cwas = bas.cwa + bas.cs; // was
let cWas = bas.cWa + bas.cs; // Was
let cbig = bas.cbi + bas.cg; // big
let cBig = bas.cBi + bas.cg; // Big
let cbigger = cbig + phn.cger; // bigger
let cBigger = cBig + phn.cger; // Bigger
let cbiggest = cbig + phn.cgest; // biggest
let cBiggest = cBig + phn.cgest; // Biggest
let cspecific = phn.cspec + phn.cific; // specific
let cSpecific = phn.cSpec + phn.cific; // Specific
let cspecified = phn.cspec + phn.cified; // specified
let cSpecified = phn.cSpec + phn.cified; // Specified
let cdomain = bas.cdo + cmain; // domain
let cDomain = bas.cDo + cmain; // Domain
let cmode = bas.cm + phn.code; // mode
let cMode = bas.cM + phn.code; // Mode
let csymbol = phn.csym + phn.cbol; // symbol
let cSymbol = phn.cSym + phn.cbol; // Symbol
let csymbols = csymbol + bas.cs; // symbols
let cSymbols = cSymbol + bas.cs; // Symbols
let cresolve = phn.cres + phn.colv + bas.ce; // resolve
let cResolve = phn.cRes + phn.colv + bas.ce; // Resolve
let cresolved = cresolve + bas.cd; // resolved
let cResolved = cResolve + bas.cd; // Resolved
let cresolving = phn.cres + phn.colv + phn.cing; // resolving
let cResolving = phn.cRes + phn.colv + phn.cing; // Resolving
let cvariation = phn.cvar + bas.cia + phn.ction; // variation
let cVariation = phn.cVar + bas.cia + phn.ction; // Variation
let cterm = bas.ct + phn.cerm; // term
let cTerm = bas.cT + phn.cerm; // Term
let ccost = bas.cc + phn.cost; // cost
let cCost = bas.cC + phn.cost; // Cost
let cperiod = phn.cper + phn.ciod; // period
let cPeriod = phn.cPer + phn.ciod; // Period
let ccannot = ccan + gen.cnot; // cannot
let cCannot = cCan + gen.cnot; // Cannot
let cnothing = gen.cnot + phn.ching; // nothing
let cNothing = gen.cNot + phn.ching; // Nothing
let cnothingness = cnothing + phn.cness; // nothingness
let cNothingness = cNothing + phn.cness; // Nothingness
let cused = cuse + bas.cd; // used
let cUsed = cUse + bas.cd; // Used
let cusing = bas.cus + phn.cing; // using
let cUsing = bas.cUs + phn.cing; // Using
let cbreak = bas.cbr + phn.ceak; // break
let cBreak = bas.cBr + phn.ceak; // Break
let cinto = bas.ci + phn.cnto; // into
let cInto = bas.cI + phn.cnto; // Into
let cunable = bas.cun + phn.cable; // unable
let cUnable = bas.cUn + phn.cable; // Unable
let cnow = bas.cno + bas.cw; // now
let cNow = bas.cNo + bas.cw; // Now
let cknow = bas.ck + cnow; // know
let cKnow = bas.cK + cnow; // Know
let cknown = cknow + bas.cn; // known
let cKnown = cKnow + bas.cn; // Known
let cunknown = bas.cun + cknown; // unknown
let cUnknown = bas.cUn + cknown; // Unknown
let ctemp = bas.ct + phn.cemp; // temp
let cTemp = bas.cT + phn.cemp; // Temp
let ctempt = ctemp + bas.ct; // tempt
let cTempt = cTemp + bas.ct; // Tempt
let cattempt = bas.cat + ctempt; // attempt
let cAttempt = bas.cA + bas.ct + ctempt; // Attempt
let cattempts = cattempt + bas.cs; // attempts
let cAttempts = cAttempt + bas.cs; // Attempts
let cattempted = cattempt + bas.ced; // attempted
let cAttempted = cAttempt + bas.ced; // Attempted
let cattempting = cattempt + phn.cing; // attempting
let cAttempting = cAttempt + phn.cing; // Attempting
let cmat = bas.cma + bas.ct; // mat
let cMat = bas.cMa + bas.ct; // Mat
let cformat = cfor + cmat; // format
let cFormat = cFor + cmat; // Format
let cformats = cformat + bas.cs; // formats
let cFormats = cFormat + bas.cs; // Formats
let cformatted = cformat + phn.cted; // formatted
let cFormatted = cFormat + phn.cted; // Formatted
let cformatting = cformat + bas.ct + phn.cing; // formatting
let cFormatting = cFormat + bas.ct + phn.cing; // Formatting
let creformat = bas.cre + cformat; // reformat
let cReformat = bas.cRe + cformat; // Reformat
let creformats = creformat + bas.cs; // reformats
let cReformats = cReformat + bas.cs; // Reformats
let creformated = creformat + bas.ced; // reformatted
let cReformated = cReformat + bas.ced; // Reformatted
let creformating = creformat + phn.cing; // reformatting
let cReformating = cReformat + phn.cing; // Reformatting
let ccorrect = phn.ccor + phn.crect; // correct
let cCorrect = phn.cCor + phn.crect; // Correct
let ccorrects = ccorrect + bas.cs; // corrects
let cCorrects = cCorrect + bas.cs; // Corrects
let ccorrected = ccorrect + bas.ced; // corrected
let cCorrected = cCorrect + bas.ced; // Corrected
let ccorrectly = ccorrect + bas.cly; // correctly
let cCorrectly = cCorrect + bas.cly; // Correctly
let ccorrecting = ccorrect + phn.cing; // correcting
let cCorrecting = cCorrect + phn.cing; // Correcting
let cbut = bas.cbu + bas.ct; // but
let cBut = bas.cBu + bas.ct; // But
let crent = bas.cr + phn.cent; // rent
let cRent = bas.cR + phn.cent; // Rent
let ccurrent = phn.ccur + crent; // current
let cCurrent = phn.cCur + crent; // Current
let cdelta = bas.cde + phn.clta; // delta
let cDelta = bas.cDe + phn.clta; // Delta
let cbeing = bas.cbe + phn.cing; // being
let cBeing = bas.cBe + phn.cing; // Being
let cskip = bas.csk + bas.cip; // skip
let cSkip = bas.cSk + bas.cip; // Skip
let cskips = cskip + bas.cs; // skips
let cSkips = cSkip + bas.cs; // Skips
let cskiped = cskip + bas.ced; // skiped
let cSkiped = cSkip + bas.ced; // Skiped
let cskiping = cskip + phn.cing; // skiping
let cSkiping = cSkip + phn.cing; // Skiping
let chad = bas.cha + bas.cd; // had
let cHad = bas.cHa + bas.cd; // Had
let cchange = bas.cch + phn.cange; // change
let cChange = bas.cCh + phn.cange; // Change
let cCHANGE = bas.cCH + phn.cANGE; // CHANGE
let cpush = bas.cp + phn.cush; // push
let cPush = bas.cP + phn.cush; // Push
let cPUSH = bas.cP + phn.cUSH; // PUSH
let cpushes = cpush + bas.ces; // pushes
let cPushes = cPush + bas.ces; // Pushes
let cpushed = cpush + bas.ced; // pushed
let cPushed = cPush + bas.ced; // Pushed
let cpushing = cpush + phn.cing; // pushing
let cPushing = cPush + phn.cing; // Pushing
let cexpand = bas.cex + phn.cpand; // expand
let cExpand = bas.cEx + phn.cpand; // Expand
let cexpands = cexpand + bas.cs; // expands
let cExpands = cExpand + bas.cs; // Expands
let cexpanded = cexpand + bas.ced; // expanded
let cExpanded = cExpand + bas.ced; // Expanded
let cexpanding = cexpand + phn.cing; // expanding
let cExpanding = cExpand + phn.cing; // Expanding
let ccall = bas.cc + call; // call
let cCall = bas.cC + call; // Call
let ccalls = ccall + bas.cs; // calls
let cCalls = cCall + bas.cs; // Calls
let ccalled = ccall + bas.ced; // called
let cCalled = cCall + bas.ced; // Called
let ccalling = ccall + phn.cing; // calling
let cCalling = cCall + phn.cing; // Calling
let clook = bas.cl + phn.cook; // look
let cLook = bas.cL + phn.cook; // Look
let clooks = clook + bas.cs; // looks
let cLooks = cLook + bas.cs; // Looks
let clooked = clook + bas.ced; // looked
let cLooked = cLook + bas.ced; // Looked
let clooking = clook + phn.cing; // looking
let cLooking = cLook + phn.cing; // Looking
let clookup = clook + bas.cup; // lookup
let cLookup = cLook + bas.cup; // Lookup
let celse = bas.ce + phn.clse; // else
let cElse = bas.cE + phn.clse; // Else
let cfar = bas.cfa + bas.cr; // far
let cFar = bas.cFa + bas.cr; // Far
let cspecify = phn.cspec + phn.cify; // specify
let cSpecify = phn.cSpec + phn.cify; // Specify
let csupport = phn.csup + cport; // support
let cSupport = phn.cSup + cport; // Support
let csupports = csupport + bas.cs; // supports
let cSupports = cSupport + bas.cs; // Supports
let csupported = csupport + bas.ced; // supported
let cSupported = cSupport + bas.ced; // Supported
let csupporting = csupport + phn.cing; // supporting
let cSupporting = cSupport + phn.cing; // Supporting
let cfound = bas.cfo + phn.cund; // found
let cFound = bas.cFo + phn.cund; // Found
let cfounded = cfound + bas.ced; // founded
let cFounded = cFound + bas.ced; // Founded
let cunfounded = bas.cun + cfounded; // unfounded
let cUnfounded = bas.cUn + cfounded; // Unfounded
let coriginal = phn.cori + bas.cg + phn.cinal; // original
let cOriginal = phn.cOri + bas.cg + phn.cinal; // Original
let coriginals = coriginal + bas.cs; // originals
let cOriginals = cOriginal + bas.cs; // Originals
let ccause = bas.cca + cuse; // cause
let cCause = bas.cCa + cuse; // Cause
let cbecause = bas.cbe + ccause; // because
let cBecause = bas.cBe + ccause; // Because
let canother = bas.can + cother; // another
let cAnother = bas.cAn + cother; // Another
let cparameter = phn.cpara + phn.cmet + bas.cer; // parameter
let cParameter = phn.cPara + phn.cmet + bas.cer; // Parameter
let cparameters = cparameter + bas.cs; // parameters
let cParameters = cParameter + bas.cs; // Parameters
let ctry = bas.ctr + bas.cy; // try
let cTry = bas.cTr + bas.cy; // Try
let ctried = bas.ctr + phn.cied; // tried
let cTried = bas.cTr + phn.cied; // Tried
let ctrying = ctry + phn.cing; // trying
let cTrying = cTry + phn.cing; // Trying
let cgain = bas.cg + phn.cain; // gain
let cGain = bas.cG + phn.cain; // Gain
let cagain = bas.ca + cgain; // again
let cAgain = bas.cA + cgain; // Again
let ctent = bas.ct + phn.cent; // tent
let cTent = bas.cT + phn.cent; // Tent
let ctents = ctent + bas.cs; // tents
let cTents = cTent + bas.cs; // Tents
let ctenting = ctent + phn.cing; // tenting
let cTenting = cTent + phn.cing; // Tenting
let ccontent = phn.ccon + ctent; // content
let cContent = phn.cCon + ctent; // Content
let ccontents = ccontent + bas.cs; // contents
let cContents = cContent + bas.cs; // Contents
let cmust = bas.cm + phn.cust; // must
let cMust = bas.cM + phn.cust; // Must
let cprompt = phn.cpro + phn.cmpt; // prompt
let cPrompt = phn.cPro + phn.cmpt; // Prompt
let cexample = bas.cex + phn.cample; // example
let cExample = bas.cEx + phn.cample; // Example
let cEXAMPLE = bas.cEX + phn.cAMPLE; // EXAMPLE
let cstructure = bas.cst + phn.cruc + phn.cture; // structure
let cStructure = bas.cSt + phn.cruc + phn.cture; // Structure
let cstructured = cstructure + bas.cd; // structured
let cStructured = cStructure + bas.cd; // Structured
let cstructures = cstructure + bas.cs; // structures
let cStructures = cStructure + bas.cs; // Structures
let cmore = bas.cm + phn.core; // more
let cMore = bas.cM + phn.core; // More
let chas = bas.cha + bas.cs; // has
let cHas = bas.cHa + bas.cs; // Has
let cready = phn.crea + bas.cdy; // ready
let cReady = phn.cRea + bas.cdy; // Ready
let cREADY = phn.cREA + bas.cDY; // READY
let calready = bas.cal + cready; // already
let cAlready = bas.cAl + cready; // Already
let cALREADY = bas.cAL + cREADY; // ALREADY
let cbeen = bas.cb + phn.ceen; // been
let cBeen = bas.cB + phn.ceen; // Been
let cfollow = bas.cf + bas.col + clow; // follow
let cFollow = bas.cF + bas.col + clow; // Follow
let cfollowes = cfollow + bas.ces; // followes
let cFollowes = cFollow + bas.ces; // Followes
let cfollowed = cfollow + bas.ced; // followed
let cFollowed = cFollow + bas.ced; // Followed
let cfollowing = cfollow + phn.cing; // following
let cFollowing = cFollow + phn.cing; // Following
let cdefinition = bas.cde + phn.cfin + phn.cition; // definition
let cDefinition = bas.cDe + phn.cfin + phn.cition; // Definition
let cdefinitions = cdefinition + bas.cs; // definitions
let cDefinitions = cDefinition + bas.cs; // Definitions
let cdone = bas.cdo + bas.cne; // done
let cDone = bas.cDo + bas.cne; // Done
let cDONE = bas.cDO + bas.cNE; // DONE
let cphase = bas.cph + phn.c_ase; // phase
let cPhase = bas.cPh + phn.c_ase; // Phase
let cphases = cphase + bas.cs; // phases
let cPhases = cPhase + bas.cs; // Phases
let cphased = cphase + bas.cd; // phased
let cPhased = cPhase + bas.cd; // Phased
let cphasing = bas.cph + bas.cas + phn.cing; // phasing
let cPhasing = bas.cPh + bas.cas + phn.cing; // Phasing
let ctick = bas.ct + phn.cick; // tick
let cTick = bas.cT + phn.cick; // Tick
let cyay = bas.cya + bas.cy; // yay
let cYay = bas.cYa + bas.cy; // Yay
let cYAY = bas.cYA + bas.cY; // YAY
let ctag = bas.cta + bas.cg; // tag
let cTag = bas.cTa + bas.cg; // Tag
let ctags = ctag + bas.cs; // tags
let cTags = cTag + bas.cs; // Tags
let ctagged = ctag + bas.cg + bas.ced; // tagged
let cTagged = cTag + bas.cg + bas.ced; // Tagged
let ctagging = ctag + bas.cg + phn.cing; // tagging
let cTagging = cTag + bas.cg + phn.cing; // Tagging
let clit = bas.cli + bas.ct; // lit
let cLit = bas.cLi + bas.ct; // Lit
let csplit = bas.csp + clit; // split
let cSplit = bas.cSp + clit; // Split
let csplits = csplit + bas.cs; // splits
let cSplits = cSplit + bas.cs; // Splits
let csplitting = csplit + bas.ct + phn.cing; // splitting
let cSplitting = cSplit + bas.ct + phn.cing; // Splitting
let cdoing = bas.cdo + phn.cing; // doing
let cDoing = bas.cDo + phn.cing; // Doing
let cstraight = bas.cs + phn.ctra + phn.cight; // straight
let cStraight = bas.cS + phn.ctra + phn.cight; // Straight
let cbroker = bas.cbr + phn.coker; // broker
let cBroker = bas.cBr + phn.coker; // Broker
let cpost = bas.cp + phn.cost; // post
let cPost = bas.cP + phn.cost; // Post
let cposts = cpost + bas.cs; // posts
let cPosts = cPost + bas.cs; // Posts
let cposted = cpost + bas.ced; // posted
let cPosted = cPost + bas.ced; // Posted
let cposting = cpost + phn.cing; // posting
let cPosting = cPost + phn.cing; // Posting
let cmerge = bas.cm + phn.cerge; // merge
let cMerge = bas.cM + phn.cerge; // Merge
let cMERGE = bas.cM + phn.cERGE; // MERGE
let cmerges = cmerge + bas.cs; // merges
let cMerges = cMerge + bas.cs; // Merges
let cmerged = cmerge + bas.cd; // merged
let cMerged = cMerge + bas.cd; // Merged
let cMERGED = cMERGE + bas.cD; // MERGED
let cmerging = bas.cm + phn.cerg + phn.cing; // merging
let cMerging = bas.cM + phn.cerg + phn.cing; // Merging
let cinclude = bas.cin + bas.cc + phn.clude; // include
let cInclude = bas.cIn + bas.cc + phn.clude; // Include
let cincludes = cinclude + bas.cs; // includes
let cIncludes = cInclude + bas.cs; // Includes
let cincluded = cinclude + bas.cd; // included
let cIncluded = cInclude + bas.cd; // Included
let cincluding = bas.cin + bas.cc + phn.clud + phn.cing; // including
let cIncluding = bas.cIn + bas.cc + phn.clud + phn.cing; // Including
let cfinal = phn.cfin + bas.cal; // final
let cFinal = phn.cFin + bas.cal; // Final
let cfinals = cfinal + bas.cs; // finals
let cFinals = cFinal + bas.cs; // Finals
let cfinally = cfinal + bas.cly; // finally
let cFinally = cFinal + bas.cly; // Finally
let ccaught = phn.ccau + phn.cght; // caught
let cCaught = phn.cCau + phn.cght; // Caught
let cflat = bas.cf + phn.clat; // flat
let cFlat = bas.cF + phn.clat; // Flat
let cflats = cflat + bas.cs; // flats
let cFlats = cFlat + bas.cs; // Flats
let cflatten = cflat + phn.cten; // flatten
let cFlatten = cFlat + phn.cten; // Flatten
let cflattened = cflat + bas.cte + phn.cned; // flattened
let cFlattened = cFlat + bas.cte + phn.cned; // Flattened
let cflattening = cflatten + phn.cing; // flattening
let cFlattening = cFlatten + phn.cing; // Flattening
let cside = bas.cs + phn.cide; // side
let cSide = bas.cS + phn.cide; // Side
let csides = cside + bas.cs; // sides
let cSides = cSide + bas.cs; // Sides
let csided = cside + bas.cd; // sided
let cSided = cSide + bas.cd; // Sided
let csiding = phn.csid + phn.cing; // siding
let cSiding = phn.cSid + phn.cing; // Siding
let cinside = bas.cin + cside; // inside
let cInside = bas.cIn + cside; // Inside
let ctarget = phn.ctar + cget; // target
let cTarget = phn.cTar + cget; // Target
let ctargets = ctarget + bas.cs; // targets
let cTargets = cTarget + bas.cs; // Targets
let ctargeted = ctarget + bas.ced; // targeted
let cTargeted = cTarget + bas.ced; // Targeted
let ctargeting = ctarget + phn.cing; // targeting
let cTargeting = cTarget + phn.cing; // Targeting
let cmodify = phn.cmod + phn.cify; // modify
let cModify = phn.cMod + phn.cify; // Modify
let cmodified = phn.cmod + phn.cified; // modified
let cModified = phn.cMod + phn.cified; // Modified
let cmodifies = phn.cmod + phn.cifies; // modifies
let cModifies = phn.cMod + phn.cifies; // Modifies
let cmodifying = cmodify + phn.cing; // modifying
let cModifying = cModify + phn.cing; // Modifying
let creference = phn.cref + bas.cer + phn.cence; // reference
let cReference = phn.cRef + bas.cer + phn.cence; // Reference
let creferences = creference + bas.cs; // references
let cReferences = cReference + bas.cs; // References
let creferenced = creference + bas.cd; // referenced
let cReferenced = cReference + bas.cd; // Referenced
let creferencing = phn.cref + bas.cer + phn.cenc + phn.cing; // referencing
let cReferencing = phn.cRef + bas.cer + phn.cenc + phn.cing; // Referencing
let cwrite = bas.cwr + phn.cite; // write
let cWrite = bas.cWr + phn.cite; // Write
let cwrites = cwrite + bas.cs; // writes
let cWrites = cWrite + bas.cs; // Writes
let cwritten = bas.cw + phn.crit + phn.cten; // written
let cWritten = bas.cW + phn.crit + phn.cten; // Written
let cwriting = bas.cw + phn.crit + phn.cing; // writing
let cWriting = bas.cW + phn.crit + phn.cing; // Writing
let cscan = bas.cs + ccan; // scan
let cScan = bas.cS + ccan; // Scan
let cscans = cscan + bas.cs; // scans
let cScans = cScan + bas.cs; // Scans
let cscanned = cscan + phn.cned; // scanned
let cScanned = cScan + phn.cned; // Scanned
let cscanning = cscan + bas.cn + phn.cing; // scanning
let cScanning = cScan + bas.cn + phn.cing; // Scanning
let cdirect = bas.cdi + phn.crect; // direct
let cDirect = bas.cDi + phn.crect; // Direct
let cdirects = cdirect + bas.cs; // directs
let cDirects = cDirect + bas.cs; // Directs
let cdirected = cdirect + bas.ced; // directed
let cDirected = cDirect + bas.ced; // Directed
let cdirector = cdirect + bas.cor; // director
let cDirector = cDirect + bas.cor; // Director
let cdirecting = cdirect + phn.cing; // directing
let cDirecting = cDirect + phn.cing; // Directing
let cdirectors = cdirector + bas.cs; // directors
let cDirectors = cDirector + bas.cs; // Directors
let cdirectory = cdirector + bas.cy; // directory
let cDirectory = cDirector + bas.cy; // Directory
let cdirectories = cdirector + phn.cies; // directories
let cDirectories = cDirector + phn.cies; // Directories
let cchive = bas.cc + chive; // chive
let cChive = bas.cC + chive; // Chive
let cchives = cchive + bas.cs; // chives
let cChives = cChive + bas.cs; // Chives
let carchive = bas.car + cchive; // archive
let cArchive = bas.cAr + cchive; // Archive
let carchived = carchive + bas.cd; // archived
let cArchived = cArchive + bas.cd; // Archived
let carchives = carchive + bas.cs; // archives
let cArchives = cArchive + bas.cs; // Archives
let carchiving = bas.car + phn.cchiv + phn.cing; // archiving
let cArchiving = bas.cAr + phn.cchiv + phn.cing; // Archiving
let ccop = bas.cco + bas.cp; // cop
let cCop = bas.cCo + bas.cp; // Cop
let ccops = ccop + bas.cs; // cops
let cCops = cCop + bas.cs; // Cops
let ccopy = bas.cc + phn.copy; // copy
let cCopy = bas.cC + phn.copy; // Copy
let ccopies = ccop + phn.cies; // copies
let cCopies = cCop + phn.cies; // Copies
let ccopied = ccop + phn.cied; // copied
let cCopied = cCop + phn.cied; // Copied
let ccopying = ccopy + phn.cing; // copying
let cCopying = cCopy + phn.cing; // Copying
let csuccess = bas.csu + phn.cccess; // success
let cSuccess = bas.cSu + phn.cccess; // Success
let csuccesses = csuccess + bas.ces; // successes
let cSuccesses = cSuccess + bas.ces; // Successes
let csuccessful = csuccess + phn.cful; // successful
let cSuccessful = cSuccess + phn.cful; // Successful
let cpack = bas.cp + phn.cack; // pack
let cPack = bas.cP + phn.cack; // Pack
let cpacks = cpack + bas.cs; // packs
let cPacks = cPack + bas.cs; // Packs
let cpacked = cpack + bas.ced; // packed
let cPacked = cPack + bas.ced; // Packed
let cpacking = cpack + phn.cing; // packing
let cPacking = cPack + phn.cing; // Packing
let cpackage = cpack + phn.cage; // package
let cPackage = cPack + phn.cage; // Package
let cpackages = cpackage + bas.cs; // packages
let cPackages = cPackage + bas.cs; // Packages
let cpackaged = cpackage + bas.cd; // packaged
let cPackaged = cPackage + bas.cd; // Packaged
let cpackaging = cpack + bas.cag + phn.cing; // packaging
let cPackaging = cPack + bas.cag + phn.cing; // Packaging
let canalyze = phn.cana + phn.clyze; // analyze
let cAnalyze = phn.cAna + phn.clyze; // Analyze
let canalyzes = canalyze + bas.cs; // analyzes
let cAnalyzes = cAnalyze + bas.cs; // Analyzes
let canalyzed = canalyze + bas.cd; // analyzed
let cAnalyzed = cAnalyze + bas.cd; // Analyzed
let canalyzing = phn.cana + phn.clyz + phn.cing; // analyzing
let cAnalyzing = phn.cAna + phn.clyz + phn.cing; // Analyzing
let csame = bas.cs + phn.came; // same
let cSame = bas.cS + phn.came; // Same
let cthere = cthe + bas.cre; // there
let cThere = cThe + bas.cre; // There
let cbracket = phn.cbra + bas.cc + phn.cket; // bracket
let cBracket = phn.cBra + bas.cc + phn.cket; // Bracket
let cbrackets = cbracket + bas.cs; // brackets
let cBrackets = cBracket + bas.cs; // Brackets
let cbracketed = cbracket + bas.ced; // bracketed
let cBracketed = cBracket + bas.ced; // Bracketed
let cbracketing = cbracket + phn.cing; // bracketing
let cBracketing = cBracket + phn.cing; // Bracketing
let cregular = phn.creg + phn.cular; // regular
let cRegular = phn.cReg + phn.cular; // Regular
let cexpression = bas.cex + cpress + phn.cion; // expression
let cExpression = bas.cEx + cpress + phn.cion; // Expression
let cexpressions = cexpression + bas.cs; // expressions
let cExpressions = cExpression + bas.cs; // Expressions
let clexical = phn.clex + phn.cical; // lexical
let cLexical = phn.cLex + phn.cical; // Lexical
let clexicon = phn.clex + phn.cicon; // lexicon
let cLexicon = phn.cLex + phn.cicon; // Lexicon
let clexicons = clexicon + bas.cs; // lexicons
let cLexicons = cLexicon + bas.cs; // Lexicons
let cjust = bas.cj + phn.cust; // just
let cJust = bas.cJ + phn.cust; // Just
let cjustice = cjust + phn.cice; // justice
let cJustice = cJust + phn.cice; // Justice
let cjustified = cjust + phn.cified; // justified
let cJustified = cJust + phn.cified; // Justified
let cadjust = bas.ca + bas.cd + cjust; // adjust
let cAdjust = bas.cAd + cjust; // Adjust
let cadjusts = cadjust + bas.cs; // adjusts
let cAdjusts = cAdjust + bas.cs; // Adjusts
let cadjusted = cadjust + bas.ced; // adjusted
let cAdjusted = cAdjust + bas.ced; // Adjusted
let cadjusting = cadjust + phn.cing; // adjusting
let cAdjusting = cAdjust + phn.cing; // Adjusting
let csleep = bas.csl + phn.ceep; // sleep
let cSleep = bas.cSl + phn.ceep; // Sleep
let csleeps = csleep + bas.cs; // sleeps
let cSleeps = cSleep + bas.cs; // Sleeps
let csleeped = csleep + bas.ced; // sleeped
let cSleeped = cSleep + bas.ced; // Sleeped
let csleeping = csleep + phn.cing; // sleeping
let cSleeping = cSleep + phn.cing; // Sleeping
let cleaf = bas.cl + phn.ceaf; // leaf
let cLeaf = bas.cL + phn.ceaf; // Leaf
let centry = bas.cen + ctry; // entry
let cEntry = bas.cEn + ctry; // Entry
let centries = bas.cen + bas.ctr + phn.cies; // entries
let cEntries = bas.cEn + bas.ctr + phn.cies; // Entries
let centity = bas.cen + phn.ctity; // entity
let cEntity = bas.cEn + phn.ctity; // Entity
let cmay = bas.cma + bas.cy; // may
let cMay = bas.cMa + bas.cy; // May
let conly = bas.co + phn.cnly; // only
let cOnly = bas.cO + phn.cnly; // Only
let csuch = bas.cs + phn.cuch; // such
let cSuch = bas.cS + phn.cuch; // Such
let cgeneration = phn.cgen + bas.cer + phn.cation; // generation
let cGeneration = phn.cGen + bas.cer + phn.cation; // Generation
let cDemocratic = cDemo + bas.ccr + phn.cati + bas.cc; // Democratic
let cRepublic = bas.cRe + cpublic; // Republic
let cCentral = unt.cCent + phn.cral; // Central
let cAfrican = bas.cAf + phn.crica + bas.cn; // African
let cPapua = bas.cPa + bas.cpu + bas.ca; // Papua
let cTrinidad = phn.cTri + bas.cni + bas.cda + bas.cd; // Trinidad
let cTabago = bas.cTa + bas.cba + bas.cgo; // Tabago
let cUnited = cUnit + bas.ced; // United
let cArab = bas.cAr + bas.cab; // Arab
let cEmirates = bas.cEm + bas.cir + phn.cates; // Emirates
let cStates = bas.cSt + phn.cates; // States
let cAmerica = bas.cAm + bas.cer + phn.cica; // America
let cliver = bas.cli + phn.cver; // liver
let cLiver = bas.cLi + phn.cver; // Liver
let ccountry = ccount + bas.cry; // country
let cCountry = cCount + bas.cry; // Country
let ccountries = ccount + phn.cries; // countries
let cCountries = cCount + phn.cries; // Countries
let cknot = bas.ck + gen.cnot; // knot
let cKnot = bas.cK + gen.cnot; // Knot
let cknots = cknot + bas.cs; // knots
let cKnots = cKnot + bas.cs; // Knots
let clanguage = phn.clang + phn.cuage; // language
let cLanguage = phn.cLang + phn.cuage; // Language
let clanguages = clanguage + bas.cs; // languages
let cLanguages = cLanguage + bas.cs; // Languages
let csole = bas.cs + phn.cole; // sole
let cSole = bas.cS + phn.cole; // Sole
let cconsole = phn.ccon + csole; // console
let cConsole = phn.cCon + csole; // Console
let cboss = bas.cb + phn.coss; // boss
let cBoss = bas.cB + phn.coss; // Boss
let cpanic = bas.cpa + phn.cnic; // panic
let cPanic = bas.cPa + phn.cnic; // Panic
let cslow = bas.cs + clow; // slow
let cSlow = bas.cS + clow; // Slow
let cgot = bas.cgo + bas.ct; // got
let cGot = bas.cGo + bas.ct; // Got
let cmiss = bas.cm + phn.ciss; // miss
let cMiss = bas.cM + phn.ciss; // Miss
let cecho = bas.cec + bas.cho; // echo
let cEcho = bas.cEc + bas.cho; // Echo
let cincrement = phn.cinc + bas.cre + phn.cment; // increment
let cIncrement = phn.cInc + bas.cre + phn.cment; // Increment
let cincrements = cincrement + bas.cs; // increments
let cIncrements = cIncrement + bas.cs; // Increments
let cincremented = cincrement + bas.ced; // incremented
let cIncremented = cIncrement + bas.ced; // Incremented
let cincrementing = cincrement + phn.cing; // incrementing
let cIncrementing = cIncrement + phn.cing; // Incrementing
let cforce = cfor + bas.cce; // force
let cForce = cFor + bas.cce; // Force
let cforced = cforce + bas.cd; // forced
let cForced = cForce + bas.cd; // Forced
let cforcing = cfor + bas.cc + phn.cing; // forcing
let cForcing = cFor + bas.cc + phn.cing; // Forcing
let cforces = cforce + bas.cs; // forces
let cForces = cForce + bas.cs; // Forces
let cexecutrix = phn.cexe + ccut + phn.crix; // executrix
let cExecutrix = phn.cExe + ccut + phn.crix; // Executrix
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
let cAbsolute = bas.cAb + phn.csol + phn.cute; // Absolute
let cAcid = bas.cAc + bas.cid; // Acid
let cAir = bas.cAi + bas.cr; // Air
let cSuperiority = phn.cSup + bas.cer + bas.cio + phn.crit + bas.cy; // Superiority
let cAlabaster = bas.cAl + bas.cab + bas.cas + phn.cter; // Alabaster
let cAlice = bas.cAl + phn.cice; // Alice
let cAlloy = phn.cAll + bas.coy; // Alloy
let cAmaranth = bas.cAm + phn.caranth; // Amaranth
let cAndroid = cAnd + bas.cro + bas.cid; // Android
let cAntique = bas.cAn + bas.cti + phn.cque; // Antique
let cBrass = phn.cBra + bas.css; // Brass
let cBronze = bas.cBr + phn.conze; // Bronze
let cApple = gen.cApp + bas.cle; // Apple
let cApricot = bas.cAp + phn.cricot; // Apricot
let cArctic = bas.cAr + bas.cct + bas.cic; // Arctic
let cArmy = bas.cAr + bas.cmy; // Army
let cArylide = bas.cAr + bas.cyl + phn.cide; // Arylide
let cAtomic = bas.cA + bas.ct + bas.com + bas.cic; // Atomic
let cBaby = bas.cBa + bas.cby; // Baby
let cEyes = bas.cEy + bas.ces; // Eyes
let cPowder = bas.cPo + phn.cwder; // Powder
let cBaker = bas.cBa + bas.cke + bas.cr; // Baker
let cMiller = unt.cMill + bas.cer; // Miller
let cBanana = bas.cBa + bas.cna + bas.cna; // Banana
let cMania = cMan + bas.cia; // Mania
let cBarbie = bas.cBa + bas.crb + bas.cie; // Barbie
let cBarn = bas.cBa + bas.crn; // Barn
let cBattleship = bas.cBa + bas.ctt + phn.cles + phn.chip; // Battleship
let cBeau = bas.cBe + bas.cau; // Beau
let cDazzled = bas.cDa + bas.czz + bas.cle + bas.cd; // Dazzled
let cBitter = bas.cBi + phn.ctte + bas.cr; // Bitter
let csweet = bas.cs + phn.cweet; // sweet
let cSweet = bas.cS + phn.cweet; // Sweet
let cBittersweet = bas.cBi + phn.ctte + bas.crs + phn.cweet; // Bittersweet
let cShimmer = bas.cSh + phn.cimmer; // Shimmer
let cBean = bas.cBe + bas.can; // Bean
let cChocolate = bas.cCh + phn.cocolate; // Chocolate
let cShadows = phn.cSha + phn.cdow + bas.cs; // Shadows
let cBlanched = bas.cBl + bas.can + bas.cch + bas.ced; // Blanched
let cBlast = bas.cBl + bas.cas + bas.ct; // Blast
let cBlizzard = bas.cBl + bas.ciz + phn.czard; // Blizzard
let cBlood = bas.cBl + phn.cood; // Blood
let cCrayola = bas.cCr + phn.cayola; // Crayola
let cMunsell = bas.cMu + phn.cnsell; // Munsell
let cPantone = bas.cPa + phn.cntone; // Pantone
let cPigment = bas.cPi + phn.cgment; // Pigment
let cBell = bas.cBe + bas.cll; // Bell
let cwheel = bas.cwh + phn.ceel; // wheel
let cWheel = bas.cWh + phn.ceel; // Wheel
let cwheels = cwheel + bas.cs; // wheels
let cWheels = cWheel + bas.cs; // Wheels
let cJeans = bas.cJe + phn.cans; // Jeans
let cYonder = bas.cYo + phn.cnder; // Yonder
let cBottle = bas.cBo + bas.ctt + bas.cle; // Bottle
let cbrick = bas.cbr + phn.cick; // brick
let cBrick = bas.cBr + phn.cick; // Brick
let cbricks = cbrick + bas.cs; // bricks
let cBricks = cBrick + bas.cs; // Bricks
let cBright = bas.cBr + phn.cight; // Bright
let cBrilliant = bas.cBr + phn.cill + phn.cian + bas.ct; // Brilliant
let cRacing = bas.cRa + bas.cci + bas.cng; // Racing
let cSugar = phn.cSug + bas.car; // Sugar
let cBrunswick = bas.cBr + bas.cun + bas.csw + phn.cick; // Brunswick
let cBud = bas.cBu + bas.cd; // Bud
let cBurly = bas.cBu + bas.crl + bas.cy; // Burly
let cBurnished = bas.cBu + bas.crn + phn.cish + bas.ced; // Burnished
let cBurnt = bas.cBu + bas.crn + bas.ct; // Burnt
let cCadet = bas.cCa + phn.cdet; // Cadet
let cCafe = bas.cCa + bas.cfe; // Cafe
let cCambridge = bas.cCa + bas.cmb + bas.cri + bas.cdg + bas.ce; // Cambridge
let cCameo = bas.cCa + bas.cme + bas.co; // Cameo
let cCaput = bas.cCa + cput; // Caput
let cMortuum = bas.cMo + bas.crt + bas.cuu + bas.cm; // Mortuum
let cCaribbean = bas.cCa + bas.cri + bas.cbb + phn.cean; // Caribbean
let cCarnation = bas.cCa + bas.crn + phn.cation; // Carnation
let cCarrot = bas.cCa + phn.crrot; // Carrot
let cCastleton = bas.cCa + phn.cstle + phn.cton; // Castleton
let cCedar = bas.cCe + bas.cda + bas.cr; // Cedar
let cChest = bas.cC + phn.chest; // Chest
let cCeladon = phn.cCel + phn.cadon; // Celadon
let cCeltic = phn.cCel + phn.ctic; // Celtic
let cCharleston = cChar + phn.cles + phn.cton; // Charleston
let cCharm = cChar + bas.cm; // Charm
let cChartreuse = cChar + phn.ctre + cuse; // Chartreuse
let cCherry = bas.cCh + phn.cerry; // Cherry
let cBlossom = bas.cBl + phn.coss + bas.com; // Blossom
let cChestnut = cChest + bas.cnu + bas.ct; // Chestnut
let cChrome = bas.cCh + bas.cro + bas.cme; // Chrome
let cCinnamon = bas.cCi + phn.cnna + phn.cmon; // Cinnamon
let cCocoa = bas.cCo + bas.cco + bas.ca; // Cocoa
let cCoffee = bas.cCo + phn.cffee; // Coffee
let cColumbia = phn.cCol + bas.cum + phn.cbia; // Columbia
let cCool = bas.cCo + bas.col; // Cool
let cflower = bas.cf + clower; // flower
let cFlower = bas.cF + clower; // Flower
let cflowers = cflower + bas.cs; // flowers
let cFlowers = cFlower + bas.cs; // Flowers
let csilk = bas.cs + phn.cilk; // silk
let cSilk = bas.cS + phn.cilk; // Silk
let cCosmic = bas.cCo + bas.csm + bas.cic; // Cosmic
let cLatte = bas.cLa + phn.ctte; // Latte
let cCoyote = bas.cCo + bas.cyo + bas.cte; // Coyote
let cCotton = bas.cCo + bas.ctt + bas.con; // Cotton
let cCyber = bas.cCy + phn.cber; // Cyber
let cDark = bas.cDa + bas.crk; // Dark
let cByzantium = bas.cBy + phn.czantium; // Byzantium
let cElectric = bas.cEl + phn.cect + phn.cric; // Electric
let cKhaki = bas.cKh + phn.caki; // Khaki
let cHorse = bas.cHo + phn.crse; // Horse
let cHorses = cHorse + bas.cs; // Horses
let cMoss = bas.cMo + bas.css; // Moss
let cPastel = bas.cPa + phn.cste + bas.cl; // Pastel
let cSky = bas.cSk + bas.cy; // Sky
let cSlate = bas.cSl + phn.cate; // Slate
let cSpring = bas.cSp + phn.crin + bas.cg; // Spring
let cDartmouth = bas.cDa + bas.crt + bas.cmo + phn.cuth; // Dartmouth
let cDavys = bas.cDa + bas.cvy + bas.cs; // Davys
let cCerise = bas.cCe + phn.crise; // Cerise
let cSparkle = bas.cSp + phn.cark + bas.cle; // Sparkle
let cDim = bas.cDi + bas.cm; // Dim
let cDodger = bas.cDo + bas.cdg + bas.cer; // Dodger
let cDogwood = bas.cDo + bas.cgw + phn.cood; // Dogwood
let cDuke = bas.cDu + bas.cke; // Duke
let cDutch = bas.cDu + phn.ctch; // Dutch
let cEarth = bas.cEa + bas.crt + bas.ch; // Earth
let cEerie = bas.cEe + bas.cri + bas.ce; // Eerie
let cEton = bas.cEt + bas.con; // Eton
let cFalu = bas.cFa + bas.clu; // Falu
let cFashion = bas.cFa + bas.csh + phn.cion; // Fashion
let cFern = bas.cFe + bas.crn; // Fern
let cFiery = bas.cFi + bas.cer + bas.cy; // Fiery
let cFire = bas.cFi + bas.cre; // Fire
let cEngine = bas.cEn + bas.cgi + bas.cne; // Engine
let cFloral = bas.cFl + phn.coral; // Floral
let cFluorescent = bas.cFl + bas.cuo + phn.cres + phn.ccent; // Fluorescent
let cForest = cFor + phn.cest; // Forest
let cFrost = bas.cFr + phn.cost; // Frost
let cbite = bas.cbi + bas.cte; // bite
let cFuzzy = bas.cFu + bas.czz + bas.cy; // Fuzzy
let cWuzzy = bas.cW + bas.cuz + bas.czy; // Wuzzy
let cGhost = bas.cGh + phn.cost; // Ghost
let cGlossy = bas.cGl + phn.coss + bas.cy; // Glossy
let cMetal = cMeta + bas.cl; // Metal
let cMetallic = cMeta + phn.cllic; // Metallic
let cFusion = bas.cFu + phn.csion; // Fusion
let cPoppy = cPop + bas.cpy; // Poppy
let cGranite = bas.cGr + bas.can + phn.cite; // Granite
let cGranny = bas.cGr + bas.can + bas.cny; // Granny
let cSmith = bas.cSm + phn.cith; // Smith
let cLizard = bas.cLi + phn.czard; // Lizard
let cGun = bas.cGu + bas.cn; // Gun
let cHarvest = bas.cHa + bas.crv + phn.cest; // Harvest
let cHeat = bas.cHe + bas.cat; // Heat
let cWave = bas.cWa + bas.cve; // Wave
let cHollywood = bas.cHo + bas.cll + bas.cyw + phn.cood; // Hollywood
let cHoney = bas.cHo + bas.cne + bas.cy; // Honey
let cdew = bas.cd + bas.cew; // dew
let cHonolulu = bas.cHo + bas.cno + bas.clu + bas.clu; // Honolulu
let cHookers = bas.cHo + phn.coker + bas.cs; // Hookers
let cHot = bas.cHo + bas.ct; // Hot
let cHunter = bas.cHu + bas.cnt + bas.cer; // Hunter
let cIce = bas.cIc + bas.ce; // Ice
let cIlluminating = bas.cIl + phn.clum + phn.cina + phn.ctin + bas.cg; // Illuminating
let cImperial = bas.cIm + phn.cper + bas.cia + bas.cl; // Imperial
let cworm = bas.cwo + bas.crm; // worm
let cIndependence = bas.cIn + bas.cde + cpen + phn.cden + bas.cce; // Independence
let cIndian = gen.cIndia + bas.cn; // Indian
let cDye = bas.cDy + bas.ce; // Dye
let cnational = cnation + bas.cal; // national
let cNational = cNation + bas.cal; // National
let cnationals = cnational + bas.cs; // nationals
let cNationals = cNational + bas.cs; // Nationals
let cInternational = phn.cInter + cnation + bas.cal; // International
let cAerospace = bas.cAe + bas.cro + cspace; // Aerospace
let cEngineering = bas.cEn + bas.cgi + bas.cne + bas.cer + phn.cing; // Engineering
let cBridge = bas.cBr + bas.cid + bas.cge; // Bridge
let cCarmine = bas.cCa + phn.crmine; // Carmine
let cjazz = bas.cja + bas.czz; // jazz
let cJazz = bas.cJa + bas.czz; // Jazz
let cberry = phn.cber + bas.cry; // berry
let cBerry = phn.cBer + bas.cry; // Berry
let cjam = bas.cja + bas.cm; // jam
let cJam = bas.cJa + bas.cm; // Jam
let cKelly = bas.cKe + bas.cll + bas.cy; // Kelly
let cKombu = bas.cKo + bas.cmb + bas.cu; // Kombu
let cLanguid = bas.cLa + bas.cng + bas.cui + bas.cd; // Languid
let cLapis = bas.cLa + bas.cpi + bas.cs; // Lapis
let cLazuli = bas.cL + bas.caz + phn.culi; // Lazuli
let cLaser = bas.cLa + bas.cse + bas.cr; // Laser
let cLaurel = bas.cLa + phn.cure + bas.cl; // Laurel
let cLawn = bas.cLa + bas.cwn; // Lawn
let cCurry = phn.cCur + bas.cry; // Curry
let cGlacier = bas.cGl + bas.cac + phn.cier; // Glacier
let cMeringue = bas.cMe + phn.crin + bas.cgu + bas.ce; // Meringue
let cLight = bas.cLi + phn.cght; // Light
let cCoral = phn.cCor + bas.cal; // Coral
let cSteel = bas.cSt + phn.ceel; // Steel
let cLuster = bas.cLu + phn.cster; // Luster
let cLincoln = phn.cLin + phn.ccol + bas.cn; // Lincoln
let cLiseran = bas.cLi + bas.cse + phn.cran; // Liseran
let cLittle = cLit + phn.ctle; // Little
let cBoy = bas.cBo + bas.cy; // Boy
let cDogs = bas.cDo + bas.cgs; // Dogs
let cOrgan =  bas.cOr + phn.cgan; // Organ
let cMacaroni = phn.cMac + phn.caro + bas.cni; // Macaroni
let cCheese = bas.cCh + bas.cee + bas.cse; // Cheese
let cMadder = bas.cMa + phn.cdder; // Madder
let cHaze = bas.cHa + bas.cze; // Haze
let cMagic = bas.cMa + bas.cgi + bas.cc; // Magic
let cMajorelle = bas.cMa + bas.cjo + bas.cre + bas.cll + bas.ce; // Majorelle
let cminimum = gen.cmin + phn.cimum; // minimum
let cMinimum = gen.cMin + phn.cimum; // Minimum
let cminimums = cminimum + bas.cs; // minimums
let cMinimums = cMinimum + bas.cs; // Minimums
let cmaximum = gen.cmax + phn.cimum; // maximum
let cMaximum = gen.cMax + phn.cimum; // Maximum
let cmaximums = cmaximum + bas.cs; // maximums
let cMaximums = cMaximum + bas.cs; // Maximums
let cMaya = gen.cMay + bas.ca; // Maya
let cMedium = bas.cMe + phn.cdium; // Medium
let cMellow = bas.cMe + phn.cllow; // Mellow
let cweed = bas.cwe + bas.ced; // weed
let cWeed = bas.cWe + bas.ced; // Weed
let cweeds = cweed + bas.cs; // weeds
let cWeeds = cWeed + bas.cs; // Weeds
let cweeded = cweed + bas.ced; // weeded
let cWeeded = cWeed + bas.ced; // Weeded
let cSeaweed = cSea + cweed; // Seaweed
let csun = bas.csu + bas.cn; // sun
let cSun = bas.cSu + bas.cn; // Sun
let csuns = csun + bas.cs; // suns
let cSuns = cSun + bas.cs; // Suns
let cSunburst = bas.cSu + bas.cnb + bas.cur + bas.cst; // Sunburst
let cMexican = bas.cMe + bas.cxi + phn.ccan; // Mexican
let cMiddle = bas.cMi + bas.cdd + bas.cle; // Middle
let cMikado = bas.cMi + bas.cka + bas.cdo; // Mikado
let cMimi = bas.cMi + bas.cm + bas.ci; // Mimi
let cMinion = gen.cMin + phn.cion; // Minion
let cMisty = phn.cMis + bas.cty; // Misty
let cMorning = bas.cMo + bas.crn + phn.cing; // Morning
let cMeadow = bas.cMe + phn.cadow; // Meadow
let cMount = bas.cMo + phn.cunt; // Mount
let cbatten = bas.cba + phn.ctten; // batten
let cMulberry = bas.cMu + bas.clb + phn.cerry; // Mulberry
let cMyrtle = bas.cMy + bas.crt + bas.cle; // Myrtle
let cNadeshiko = bas.cNa + bas.cde + bas.csh + bas.cik + bas.co; // Nadeshiko
let cNaples = bas.cNa + phn.cple + bas.cs; // Naples
let cNavajo = bas.cNa + bas.cva + bas.cjo; // Navajo
let cNavy = bas.cNa + bas.cvy; // Navy
let cNeon = bas.cNe + bas.con; // Neon
let cYork = bas.cYo + bas.crk; // York
let cPhoto = bas.cPh + bas.cot + bas.co; // Photo
let cOcean = bas.cOc + phn.cean; // Ocean
let cLace = bas.cLa + bas.cce; // Lace
let cOpera = bas.cOp + phn.cera; // Opera
let cPeel = bas.cPe + bas.cel; // Peel
let cSoda = bas.cSo + bas.cda; // Soda
let cOuter = cOut + bas.cer; // Outer
let cOutrageous = cOut + phn.crage + phn.cous; // Outrageous
let cOxford = bas.cOx + cfor + bas.cd; // Oxford
let cPacific = bas.cPa + bas.cci + phn.cfic; // Pacific
let cPalatinate = cPal + phn.catin + phn.cate; // Palatinate
let cPale = cPal + bas.ce; // Pale
let cPansy = bas.cPa + bas.cns + bas.cy; // Pansy
let cPaolo = bas.cPa + bas.col + bas.co; // Paolo
let cVeronese = phn.cVer + num.cone + bas.cse; // Veronese
let cPapaya = gen.cPapa + bas.cya; // Papaya
let cWhip = bas.cWh + bas.cip; // Whip
let cParadise = phn.cPara + bas.cdi + bas.cse; // Paradise
let cParis = bas.cPa + phn.cris; // Paris
let cPaynes = bas.cPa + bas.cyn + bas.ces; // Paynes
let cPuff = bas.cPu + bas.cff; // Puff
let cPearly = bas.cPe + bas.car + bas.cly; // Pearly
let cPermanent = phn.cPer + cman + phn.cent; // Permanent
let cGeranium = bas.cGe + phn.cran + phn.cium; // Geranium
let cLake = bas.cLa + bas.cke; // Lake
let cPersian = phn.cPer + phn.csia + bas.cn; // Persian
let cPewter = bas.cPe + bas.cwt + bas.cer; // Pewter
let cPhthalo = bas.cPh + bas.cth + bas.cal + bas.co; // Phthalo
let cPicotee = unt.cPico + phn.ctee; // Picotee
let cPictorial = bas.cPi + phn.cctor + bas.cia + bas.cl; // Pictorial
let cPiggy = bas.cPi + bas.cgg + bas.cy; // Piggy
let cPine = bas.cPi + bas.cne; // Pine
let cTree = bas.cTr + bas.cee; // Tree
let cFlamingo = bas.cFl + bas.cam + phn.cing + bas.co; // Flamingo
let cSherbet = bas.cSh + bas.cer + cbet; // Sherbet
let cPlump = bas.cPl + bas.cum + bas.cp; // Plump
let cpolish = bas.cpo + phn.clish; // polish
let cPolish = bas.cPo + phn.clish; // Polish
let cpolished = cpolish + bas.ced; // polished
let cPolished = cPolish + bas.ced; // Polished
let cPomp = bas.cPo + bas.cmp; // Pomp
let cPower = bas.cPo + phn.cwer; // Power
let cPortland = cPort + bas.cla + bas.cnd; // Portland
let cPrinceton = phn.cPri + phn.cnce + phn.cton; // Princeton
let cPrussian = bas.cPr + bas.cus + phn.csia + bas.cn; // Prussian
let cPsychedelic = bas.cPs + bas.cyc + bas.che + phn.cdel + bas.cic; // Psychedelic
let cPullman = bas.cPu + bas.cll + cman; // Pullman
let cMountain = bas.cMo + phn.cunt + phn.cain; // Mountain
let cMajesty = bas.cMa + bas.cje + phn.csty; // Majesty
let cPizzazz = bas.cPi + bas.czz + phn.cazz; // Pizzazz
let cQueen = phn.cQue + bas.cen; // Queen
let cQuick = bas.cQu + phn.cick; // Quick
let cQuinacridone = bas.cQu + phn.cina + bas.ccr + bas.cid + num.cone; // Quinacridone
let cRadical = bas.cRa + bas.cdi + phn.ccal; // Radical
let cRaisin = bas.cRa + bas.cis + bas.cin; // Raisin
let cGlace = bas.cGl + phn.cace; // Glace
let cRazzle = bas.cRa + bas.czz + bas.cle; // Razzle
let cDazzle = bas.cDa + bas.czz + bas.cle; // Dazzle
let cRazzmic = bas.cRa + bas.czz + bas.camai + bas.cc; // Razzmic
let cRebecca = bas.cRe + bas.cbe + bas.ccc + bas.ca; // Rebecca
let cSalsa = bas.cSa + bas.cls + bas.ca; // Salsa
let cResolution = phn.cRes + bas.col + bas.cut + phn.cion; // Resolution
let cRich = bas.cRi + bas.cch; // Rich
let cRifle = bas.cRi + bas.cfl + bas.ce; // Rifle
let cRobin = bas.cRo + gen.cbin; // Robin
let cEgg = bas.cEg + bas.cg; // Egg
let cRocket = bas.cRo + bas.cck + bas.cet; // Rocket
let cRoman = bas.cRo + cman; // Roman
let cBonbon = bas.cBo + bas.cnb + bas.con; // Bonbon
let cDust = bas.cDu + bas.cst; // Dust
let cEbony = bas.cEb + phn.cony; // Ebony
let cQuartz = cQuart + bas.cz; // Quartz
let cVale = bas.cVa + bas.cle; // Vale
let cwood = bas.cwo + bas.cod; // wood
let cRosso = bas.cRo + bas.css + bas.co; // Rosso
let cCorsa = bas.cC + bas.cor + bas.csa; // Corsa
let cRosy = bas.cRo + bas.csy; // Rosy
let cRoyal = bas.cRo + bas.cya + bas.cl; // Royal
let crub = bas.cru + bas.cb; // rub
let cRub = bas.cRu + bas.cb; // Rub
let crubs = crub + bas.cs; // rubs
let cRubs = cRub + bas.cs; // Rubs
let crubbed = crub + cbed; // rubbed
let cRubbed = cRub + cbed; // Rubbed
let crubbing = crub + phn.cbing; // rubbing
let cRubbing = cRub + phn.cbing; // Rubbing
let cRubine = cRub + phn.cine; // Rubine
let cSacramento = bas.cSa + bas.ccr + phn.camen + bas.cto; // Sacramento
let cState = bas.cSt + phn.cate; // State
let cSaddle = bas.cSa + bas.cdd + bas.cle; // Saddle
let cSafety = cSafe + bas.cty; // Safety
let cBlaze = bas.cBl + phn.caze; // Blaze
let cPatricks = cPat + phn.crick + bas.cs; // Patricks
let cSandy = gen.cSan + bas.cdy; // Sandy
let csap = bas.csa + bas.cp; // sap
let cSap = bas.cSa + bas.cp; // Sap
let cSatin = bas.cSa + phn.ctin; // Satin
let cSheen = bas.cSh + phn.ceen; // Sheen
let cSchauss = bas.cSc + bas.cha + bas.cus + bas.cs; // Schauss
let cSchool = bas.cSc + bas.cho + bas.col; // School
let cBus = bas.cBu + bas.cs; // Bus
let cScreamin = bas.cSc + phn.cream + bas.cin; // Screamin
let cSeal = cSea + bas.cl; // Seal
let cshell = bas.csh + phn.cell; // shell
let cSelective = cSelect + phn.cive; // Selective
let cShamrock = phn.cSha + bas.cmr + phn.cock; // Shamrock
let cShimmering = cShimmer + phn.cing; // Shimmering
let cBlush = bas.cBl + phn.cush; // Blush
let cShiny = bas.cSh + bas.cin + bas.cy; // Shiny
let cShocking = bas.cSh + phn.cock + phn.cing; // Shocking
let cChalice = bas.cCh + phn.cali + bas.cce; // Chalice
let cSizzling = bas.cSi + bas.czz + phn.clin + bas.cg; // Sizzling
let cSunrise = bas.cS + bas.cun + phn.crise; // Sunrise
let cSlimy = bas.cSl + bas.cim + bas.cy; // Slimy
let cSmoky = bas.cSm + bas.cok + bas.cy; // Smoky
let cSonic = bas.cSo + phn.cnic; // Sonic
let cBistre = bas.cBi + phn.cstre; // Bistre
let cStar = bas.cSt + bas.car; // Star
let cStil = bas.cSt + bas.cil; // Stil
let cGrain = bas.cGr + phn.cain; // Grain
let cglow = bas.cg + clow; // glow
let cSuper = phn.cSup + bas.cer; // Super
let cTango = gen.cTango; // Tango
let cTart = phn.cTart; // Tart
let cTea = bas.cTe + bas.ca; // Tea
let cTerra = bas.cTe + phn.crra; // Terra
let cCotta = bas.cCo + bas.ctt + bas.ca; // Cotta
let cThulian = bas.cTh + phn.culi + bas.can; // Thulian
let cTickle = cTick + bas.cle; // Tickle
let cTiffany = bas.cTi + bas.cff + phn.cany; // Tiffany
let cTimber = bas.cTi + phn.cmber; // Timber
let cwolf = bas.cwo + bas.clf; // wolf
let cTropical = bas.cTr + bas.cop + phn.cical; // Tropical
let cRain = bas.cR + phn.cain; // Rain
let cTrypan = cTry + bas.cpa + bas.cn; // Trypan
let cTufts = bas.cTu + bas.cft + bas.cs; // Tufts
let cTumble = bas.cTu + bas.cmb + bas.cle; // Tumble
let cTwilight = bas.cTw + phn.cili + phn.cght; // Twilight
let cTyrian = bas.cTy + phn.cria + bas.cn; // Tyrian
let cUltra = bas.cUl + phn.ctra; // Ultra
let cUnbleached = bas.cUn + phn.cble + phn.cach + bas.ced; // Unbleached
let cNations = cNation + bas.cs; // Nations
let cUpsdell = bas.cUp + bas.csd + phn.cell; // Upsdell
let cUranian = bas.cUr + phn.cania + bas.cn; // Uranian
let cvan = bas.cva + bas.cn; // van
let cVan = bas.cVa + bas.cn; // Van
let cDyke = bas.cDy + bas.cke; // Dyke
let cVegas = bas.cVe + bas.cga + bas.cs; // Vegas
let cVenetian = bas.cVe + bas.cne + bas.cti + bas.can; // Venetian
let cVivid = bas.cVi + phn.cvid; // Vivid
let cWarm = bas.cWa + bas.crm; // Warm
let cWild = bas.cWi + bas.cld; // Wild
let cWindsor = cWind + bas.cso + bas.cr; // Windsor
let cDregs = bas.cDr + bas.ceg + bas.cs; // Dregs
let cWinter = bas.cWi + bas.cnt + bas.cer; // Winter
let cDream = bas.cDr + phn.ceam; // Dream
let cYale = bas.cYa + bas.cle; // Yale

module.exports = {
  // Miscelaneious Words
  ['c1a1d']: c1a1d, // ad // 'ca' & 'cd' is some how a reserved word.
  ['c3d']: c3d, // 3d
  ['c3D']: c3D, // 3D
  ['cout']: cout, // out
  ['cOut']: cOut, // Out
  ['cLog']: cLog, // Log
  ['clog']: clog, // log
  ['cLogs']: cLogs, // Logs
  ['clogs']: clogs, // logs
  ['ckey']: ckey, // key
  ['cKey']: cKey, // Key
  ['ckeys']: ckeys, // keys
  ['cKeys']: cKeys, // Keys
  ['ckeyed']: ckeyed, // keyed
  ['cKeyed']: cKeyed, // Keyed
  ['ckeying']: ckeying, // keying
  ['cKeying']: cKeying, // Keying
  ['cnode']: cnode, // node
  ['cNode']: cNode, // Node
  ['curl']: curl, // url
  ['cURL']: cURL, // URL
  ['cnth']: cnth, // nth
  ['cNth']: cNth, // Nth
  ['cregEx']: cregEx, // regEx
  ['cRegEx']: cRegEx, // RegEx
  ['cflag']: cflag, // flag
  ['cFlag']: cFlag, // Flag
  ['cflags']: cflags, // flags
  ['cFlags']: cFlags, // Flags

  // Data Types
  ['cstring']: cstring, // string
  ['cString']: cString, // String
  ['cstrings']: cstrings, // strings
  ['cStrings']: cStrings, // Strings
  ['cinteger']: cinteger, // integer
  ['cInteger']: cInteger, // Integer
  ['cintegers']: cintegers, // integers
  ['cIntegers']: cIntegers, // Integers
  ['cfloat']: cfloat, // float
  ['cFloat']: cFloat, // Float
  ['cfloats']: cfloats, // floats
  ['cFloats']: cFloats, // Floats
  ['clong']: clong, // long
  ['cLong']: cLong, // Long
  ['clongs']: clongs, // longs
  ['cLongs']: cLongs, // Longs
  ['clonger']: clonger, // longer
  ['cLonger']: cLonger, // Longer
  ['clongest']: clongest, // longest
  ['cLongest']: cLongest, // Longest
  ['cshort']: cshort, // short
  ['cShort']: cShort, // Short
  ['cshorts']: cshorts, // shorts
  ['cShorts']: cShorts, // Shorts
  ['cshorter']: cshorter, // shorter
  ['cShorter']: cShorter, // Shorter
  ['cshortest']: cshortest, // shortest
  ['cShortest']: cShortest, // Shortest
  ['cdouble']: cdouble, // double
  ['cDouble']: cDouble, // Double
  ['cdoubles']: cdoubles, // doubles
  ['cDoubles']: cDoubles, // Doubles
  ['cchar']: cchar, // char
  ['cChar']: cChar, // Char
  ['cchars']: cchars, // chars
  ['cChars']: cChars, // Chars
  ['cboolean']: cboolean, // boolean
  ['cBoolean']: cBoolean, // Boolean
  ['cbooleans']: cbooleans, // booleans
  ['cBooleans']: cBooleans, // Booleans
  ['cobject']: cobject, // object
  ['cObject']: cObject, // Object
  ['cobjects']: cobjects, // objects
  ['cObjects']: cObjects, // Objects

  // General Use Words
  ['csubstring']: csubstring, // substring
  ['csubString']: csubString, // subString
  ['cSubString']: cSubString, // SubString
  ['cwind']: cwind, // wind
  ['cWind']: cWind, // Wind
  ['cwindow']: cwindow, // window
  ['cWindow']: cWindow, // Window
  ['cwindows']: cwindows, // windows
  ['cWindows']: cWindows, // Windows
  ['clinux']: clinux, // linux
  ['cLinux']: cLinux, // Linux
  ['cword']: cword, // word
  ['cWord']: cWord, // Word
  ['cwords']: cwords, // words
  ['cWords']: cWords, // Words
  ['coops']: coops, // oops
  ['cOops']: cOops, // Oops
  ['cOOPS']: cOOPS, // OOPS
  ['clet']: clet, // let
  ['cLet']: cLet, // Let
  ['clets']: clets, // lets
  ['cLets']: cLets, // Lets
  ['cfig']: cfig, // fig
  ['cFig']: cFig, // Fig
  ['cfiglet']: cfiglet,
  ['cFiglet']: cFiglet,
  ['cconfig']: cconfig, // config
  ['cConfig']: cConfig, // Config
  ['cconfiguration']: cconfiguration, // configuration
  ['cConfiguration']: cConfiguration, // Configuration
  ['cconfigurations']: cconfigurations, // configurations
  ['cConfigurations']: cConfigurations, // Configurations
  ['cconfigured']: cconfigured, // configured
  ['cConfigured']: cConfigured, // Configured
  ['cconfiguring']: cconfiguring, // configuring
  ['cConfiguring']: cConfiguring, // Configuring
  ['cempty']: cempty, // empty
  ['cEmpty']: cEmpty, // Empty
  ['cfull']: cfull, // full
  ['cFull']: cFull, // Full
  ['cfully']: cfully, // fully
  ['cFully']: cFully, // Fully
  ['ccreate']: ccreate, // create
  ['cCreate']: cCreate, // Create
  ['cSubmit']: cSubmit, // Submit
  ['c_add']: c_add, // add
  ['cAdd']: cAdd, // Add
  ['cADD']: cADD, // ADD
  ['cadded']: cadded, // added
  ['cAdded']: cAdded, // Added
  ['cadding']: cadding, // adding
  ['cAdding']: cAdding, // Adding
  ['cadditional']: cadditional, // additional
  ['cAdditional']: cAdditional, // Additional
  ['cADDITIONAL']: cADDITIONAL, // ADDITIONAL
  ['cadditionals']: cadditionals, // additionals
  ['cAdditionals']: cAdditionals, // Additionals
  ['cpen']: cpen, // pen
  ['cPen']: cPen, // Pen
  ['cpens']: cpens, // pens
  ['cPens']: cPens, // Pens
  ['cclose']: cclose, // close
  ['cClose']: cClose, // Close
  ['cclosed']: cclosed, // closed
  ['cClosed']: cClosed, // Closed
  ['cclosing']: cclosing, // closing
  ['cClosing']: cClosing, // Closing
  ['copen']: copen, // open
  ['cOpen']: cOpen, // Open
  ['copens']: copens, // opens
  ['cOpens']: cOpens, // Opens
  ['copened']: copened, // opened
  ['cOpened']: cOpened, // Opened
  ['copening']: copening, // opening
  ['cOpening']: cOpening, // Opening
  ['cUpdate']: cUpdate, // Update
  ['cEdit']: cEdit, // Edit
  ['cdelete']: cdelete, // delete
  ['cDelete']: cDelete, // Delete
  ['cdeletion']: cdeletion, // deletion
  ['cDeletion']: cDeletion, // Deletion
  ['cinsert']: cinsert, // insert
  ['cInsert']: cInsert, // Insert
  ['cinsertion']: cinsertion, // insertion
  ['cInsertion']: cInsertion, // Insertion
  ['csubstitute']: csubstitute, // substitute
  ['cSubstitute']: cSubstitute, // Substitute
  ['csubstitution']: csubstitution, // substitution
  ['cSubstitution']: cSubstitution, // Substitution
  ['call']: call, // all
  ['cAll']: cAll, // All
  ['cat']: cat, // at
  ['cAt']: cAt, // At // Not to be confused with the bas.cAt = '@'!!!
  ['cselect']: cselect, // select
  ['cSelect']: cSelect, // Select
  ['ccan']: ccan, // can
  ['cCan']: cCan, // Can
  ['ccancel']: ccancel,ccel; // cancel
  ['cCancel']: cCancel,ccel; // Cancel
  ['cconfirm']: cconfirm, // confirm
  ['cConfirm']: cConfirm, // Confirm
  ['ccount']: ccount, // count
  ['cCount']: cCount, // Count
  ['ccounter']: ccounter, // counter
  ['cCounter']: cCounter, // Counter
  ['cAccount']: cAccount, // Account
  ['cHamburger']: cHamburger, // Hamburger
  ['cMe']: cMe, // Me
  ['cMenu']: cMenu, // Menu
  ['cwith']: cwith, // with
  ['cWith']: cWith, // With
  ['cwithout']: cwithout, // without
  ['cWithout']: cWithout, // Without
  ['cdetail']: cdetail, // detail
  ['cDetail']: cDetail, // Detail
  ['cdetails']: cdetails, // details
  ['cDetails']: cDetails, // Details
  ['cfront']: cfront, // front
  ['cFront']: cFront, // Front
  ['cback']: cback, // back
  ['cBack']: cBack, // Back
  ['cleft']: cleft, // left
  ['cLeft']: cLeft, // Left
  ['cright']: cright, // right
  ['cRight']: cRight, // Right
  ['cTo']: cTo, // To
  ['ctop']: ctop, // top
  ['cTop']: cTop, // Top
  ['cbottom']: cbottom, // bottom
  ['cBottom']: cBottom, // Bottom
  ['cbegin']: cbegin, // begin
  ['cBegin']: cBegin, // Begin
  ['cBEGIN']: cBEGIN, // BEGIN
  ['cbeginning']: cbeginning, // beginning
  ['cBeginning']: cBeginning, // Beginning
  ['cend']: cend, // end
  ['cEnd']: cEnd, // End
  ['cEND']: cEND, // END
  ['cending']: cending, // ending
  ['cEnding']: cEnding, // Ending
  ['cthe']: cthe, // the
  ['cThe']: cThe, // The
  ['citem']: citem, // item
  ['cItem']: cItem, // Item
  ['citems']: citems, // items
  ['cItems']: cItems, // Items
  ['clist']: clist, // list
  ['cList']: cList, // List
  ['clists']: clists, // lists
  ['cLists']: cLists, // Lists
  ['clisted']: clisted, // listed
  ['cListed']: cListed, // Listed
  ['cshare']: cshare, // share
  ['cShare']: cShare, // Share
  ['cShares']: cShares, // Shares
  ['cshares']: cshares, // shares
  ['cshared']: cshared, // shared
  ['cShared']: cShared, // Shared
  ['cUnShared']: cUnShared, // UnShared
  ['cUnshared']: cUnshared, // Unshared
  ['cUnshare']: cUnshare, // Unshare
  ['cUnShare']: cUnShare, // UnShare
  ['cview']: cview, // view
  ['cView']: cView, // View
  ['cNew']: cNew, // New
  ['cload']: cload, // bas.cad; // load // NOTE: Apparently 'cad' is also a reserved word.
  ['cLoad']: cLoad, // bas.cad; // Load // NOTE: Apparently 'cad' is also a reserved word.
  ['cloads']: cloads, // loads
  ['cLoads']: cLoads, // Loads
  ['cloaded']: cloaded, // loaded
  ['cLoaded']: cLoaded, // Loaded
  ['cloading']: cloading, // loading
  ['cLoading']: cLoading, // Loading
  ['cclick']: cclick, // click
  ['cClick']: cClick, // Click
  ['cpress']: cpress, // press
  ['cPress']: cPress, // Press
  ['cpresses']: cpresses, // presses
  ['cPresses']: cPresses, // Presses
  ['cpressed']: cpressed, // pressed
  ['cPressed']: cPressed, // Pressed
  ['cpressing']: cpressing, // pressing
  ['cPressing']: cPressing, // Pressing
  ['cpressKey']: cpressKey, // pressKey
  ['cPressKey']: cPressKey, // PressKey
  ['cexpect']: cexpect, // expect
  ['cExpect']: cExpect, // Expect
  ['cexpects']: cexpects, // expects
  ['cExpects']: cExpects, // Expects
  ['cexpected']: cexpected, // expected
  ['cExpected']: cExpected, // Expected
  ['cexpecting']: cexpecting, // expecting
  ['cExpecting']: cExpecting, // Expecting
  ['cnavigate']: cnavigate, // navigate
  ['cNavigate']: cNavigate, // Navigate
  ['csave']: csave, // Save
  ['cSave']: cSave, // Save
  ['cDownload']: cDownload, // Download
  ['cNegative']: cNegative, // Negative
  ['cPositive']: cPositive, // Positive
  ['cEntire']: cEntire, // Entire
  ['cinfo']: cinfo, // info
  ['cInfo']: cInfo, // Info
  ['cLink']: cLink, // Link
  ['cLabel']: cLabel, // Label
  ['cField']: cField, // Field
  ['ctype']: ctype, // type
  ['cType']: cType, // Type
  ['cTypes']: cTypes, // Types
  ['cvalid']: cvalid, // valid
  ['cValid']: cValid, // Valid
  ['cVALID']: cVALID, // VALID
  ['cvalidation']: cvalidation, // validation
  ['cValidation']: cValidation, // Validation
  ['cvalidations']: cvalidations, // validations
  ['cValidations']: cValidations, // Validations
  ['cvalidate']: cvalidate, // validate
  ['cValidate']: cValidate, // Validate
  ['cinvalid']: cinvalid, // invalid
  ['cInvalid']: cInvalid, // Invalid
  ['cINVALID']: cINVALID, // INVALID
  ['cbug']: cbug, // bug
  ['cdebug']: cdebug, // debug
  ['cDebug']: cDebug, // Debug
  ['cpage']: cpage, // page
  ['cPage']: cPage, // Page
  ['cpages']: cpages, // pages
  ['cPages']: cPages, // Pages
  ['cmessage']: cmessage, // message
  ['cMessage']: cMessage, // Message
  ['cmessages']: cmessages, // messages
  ['cMessages']: cMessages, // Messages
  ['cScript']: cScript, // Script
  ['cScripts']: cScripts, // Scripts
  ['ckeyword']: ckeyword, // keyword
  ['cKeyword']: cKeyword, // Keyword
  ['ckeywords']: ckeywords, // keywords
  ['cKeywords']: cKeywords, // Keywords
  ['cdata']: cdata, // data
  ['cData']: cData, // Data
  ['cDATA']: cDATA, // DATA
  ['cresult']: cresult, // result
  ['cResult']: cResult, // Result
  ['cresults']: cresults, // results
  ['cResults']: cResults, // Results
  ['cresulted']: cresulted, // resulted
  ['cResulted']: cResulted, // Resulted
  ['cresulting']: cresulting, // resulting
  ['cResulting']: cResulting, // Resulting
  ['cwork']: cwork, // work
  ['cWork']: cWork, // Work
  ['cflow']: cflow, // flow
  ['cFlow']: cFlow, // Flow
  ['cworkflow']: cworkflow, // workflow
  ['cWorkflow']: cWorkflow, // Workflow
  ['cworkflows']: cworkflows, // workflows
  ['cWorkflows']: cWorkflows, // Workflows
  ['ctest']: ctest, // test
  ['cTest']: cTest, // Test
  ['cTEST']: cTEST, // TEST
  ['ctests']: ctests, // tests
  ['cTests']: cTests, // Tests
  ['cTESTS']: cTESTS, // TESTS
  ['cStatus']: cStatus, // Status
  ['cTestStatus']: cTestStatus, // TestStatus
  ['cTestStatusMessage']: cTestStatusMessage, // TestStatusMessage
  ['cTestWorkflow']: cTestWorkflow, // TestWorkflow
  ['cBureau']: cBureau, // Bureau
  ['cExhaustive']: cExhaustive, // Exhaustive
  ['cBrowser']: cBrowser, // Browser
  ['cact']: cact, // act
  ['cAct']: cAct, // Act
  ['caction']: caction, // action
  ['cAction']: cAction, // Action
  ['cactions']: cactions, // actions
  ['cActions']: cActions, // Actions
  ['cactual']: cactual, // actual
  ['cActual']: cActual, // Actual
  ['cauto']: cauto, // auto
  ['cAuto']: cAuto, // Auto
  ['cautomation']: cautomation, // automation
  ['cAutomation']: cAutomation, // Automation
  ['cnumber']: cnumber, // number
  ['cNumber']: cNumber, // Number
  ['cHost']: cHost, // Host
  ['cOf']: cOf, // Of
  ['crow']: crow, // row
  ['cRow']: cRow, // Row
  ['crows']: crows, // rows
  ['cRows']: cRows, // Rows
  ['crowed']: crowed, // rowed
  ['cRowed']: cRowed, // Rowed
  ['crowing']: crowing, // rowing
  ['cRowing']: cRowing, // Rowing
  ['crun']: crun, // run
  ['cRun']: cRun, // Run
  ['cruns']: cruns, // runs
  ['cRuns']: cRuns, // Runs
  ['crunning']: crunning, // running
  ['cRunning']: cRunning, // Running
  ['cmaster']: cmaster, // master
  ['cMaster']: cMaster, // Master
  ['cEnvironment']: cEnvironment, // Environment
  ['cname']: cname, // name
  ['cName']: cName, // Name
  ['cnames']: cnames, // names
  ['cNames']: cNames, // Names
  ['cnamed']: cnamed, // named
  ['cNamed']: cNamed, // Named
  ['ckeywordName']: ckeywordName, // keywordName
  ['cKeywordName']: cKeywordName, // KeywordName
  ['cPageScriptName']: cPageScriptName, // PageScriptName
  ['cid']: cid, // id
  ['cId']: cId, // Id
  ['cID']: cID, // ID
  ['cmail']: cmail, // mail
  ['cEmail']: cEmail, // Email
  ['cEmails']: cEmails, // Emails
  ['cReceive']: cReceive, // Receive
  ['cReceived']: cReceived, // Received
  ['cdate']: cdate, // date
  ['cDate']: cDate, // Date
  ['ctime']: ctime, // time
  ['cTime']: cTime, // Time
  ['cruntime']: cruntime, // runtime
  ['cRuntime']: cRuntime, // Runtime
  ['cRunTime']: cRunTime, // RunTime
  ['cstamp']: cstamp, // stamp
  ['cStamp']: cStamp, // Stamp
  ['cstamps']: cstamps, // stamps
  ['cStamps']: cStamps, // Stamps
  ['cstamped']: cstamped, // stamped
  ['cStamped']: cStamped, // Stamped
  ['cstamping']: cstamping, // stamping
  ['cStamping']: cStamping, // Stamping
  ['cmediate']: cmediate, // mediate
  ['cintermediate']: cintermediate, // intermediate
  ['cIntermediate']: cIntermediate, // Intermediate
  ['cpath']: cpath, // path
  ['cPath']: cPath, // Path
  ['cpaths']: cpaths, // paths
  ['cPaths']: cPaths, // Paths
  ['cexit']: cexit, // exit
  ['cExit']: cExit, // Exit
  ['cexiting']: cexiting, // exiting
  ['cExiting']: cExiting, // Exiting
  ['cViewer']: cViewer, // Viewer
  ['cPermission']: cPermission, // Permission
  ['cBug']: cBug, // Bug
  ['cset']: cset, // set
  ['cSet']: cSet, // Set
  ['csetting']: csetting, // setting
  ['cSetting']: cSetting, // Setting
  ['csettings']: csettings, // settings
  ['cSettings']: cSettings, // Settings
  ['cPreview']: cPreview, // Preview
  ['climit']: climit, // limit // NOTE: bas.cmi resolves as "s"
  ['cLimit']: cLimit, // Limit // NOTE: bas.cmi resolves as "s"
  ['cGate']: cGate, // Gate
  ['cway']: cway, // way
  ['cWay']: cWay, // Way
  ['cGateway']: cGateway, // Gateway
  ['cprocess']: cprocess, // process
  ['cProcess']: cProcess, // Process
  ['cPROCESS']: cPROCESS, // PROCESS
  ['cprocessed']: cprocessed, // processed
  ['cProcessed']: cProcessed, // Processed
  ['cprocesses']: cprocesses, // processes
  ['cProcesses']: cProcesses, // Processes
  ['cprocessing']: cprocessing, // processing
  ['cProcessing']: cProcessing, // Processing
  ['cPROCESSING']: cPROCESSING, // PROCESSING
  ['ccomplete']: ccomplete, // complete
  ['cComplete']: cComplete, // Complete
  ['ccompleted']: ccompleted, // completed
  ['cCompleted']: cCompleted, // Completed
  ['cand']: cand, // and
  ['cAnd']: cAnd, // And
  ['cuse']: cuse, // use
  ['cUse']: cUse, // Use
  ['cuser']: cuser, // user
  ['cUser']: cUser, // User
  ['cAccess']: cAccess, // Access
  ['clevel']: clevel, // level
  ['cLevel']: cLevel, // Level
  ['cget']: cget, // get
  ['cGet']: cGet, // Get
  ['cput']: cput, // put
  ['cPut']: cPut, // Put
  ['cPUT']: cPUT, // PUT
  ['cfrom']: cfrom, // from
  ['cFrom']: cFrom, // From
  ['cplace']: cplace, // place
  ['cPlace']: cPlace, // Place
  ['cplaces']: cplaces, // places
  ['cPlaces']: cPlaces, // Places
  ['cplaced']: cplaced, // placed
  ['cPlaced']: cPlaced, // Placed
  ['cplacing']: cplacing, // placing
  ['cPlacing']: cPlacing, // Placing
  ['cplacement']: cplacement, // placement
  ['cPlacement']: cPlacement, // Placement
  ['creplace']: creplace, // replace
  ['cReplace']: cReplace, // Replace
  ['creplaces']: creplaces, // replaces
  ['cReplaces']: cReplaces, // Replaces
  ['creplaced']: creplaced, // replaced
  ['cReplaced']: cReplaced, // Replaced
  ['creplacing']: creplacing, // replacing
  ['cReplacing']: cReplacing, // Replacing
  ['creplacement']: creplacement, // replacement
  ['cReplacement']: cReplacement, // Replacement
  ['cspace']: cspace, // space
  ['cSpace']: cSpace, // Space
  ['cspaces']: cspaces, // spaces
  ['cSpaces']: cSpaces, // Spaces
  ['cspaced']: cspaced, // spaced
  ['cSpaced']: cSpaced, // Spaced
  ['cplus']: cplus, // plus
  ['cPlus']: cPlus, // Plus
  ['ccolon']: ccolon, // colon
  ['cColon']: cColon, // Colon
  ['cunder']: cunder, // under
  ['cUnder']: cUnder, // Under
  ['cscore']: cscore, // score
  ['cScore']: cScore, // Score
  ['cunderscore']: cunderscore, // underscore
  ['cUnderscore']: cUnderscore, // Underscore
  ['cCatagory']: cCatagory, // Catagory
  ['cclean']: cclean, // clean
  ['cClean']: cClean, // Clean
  ['ccleaned']: ccleaned, // cleaned
  ['cCleaned']: cCleaned, // Cleaned
  ['cCarriage']: cCarriage, // Carriage
  ['cturn']: cturn, // turn
  ['creturn']: creturn, // return
  ['cReturn']: cReturn, // Return
  ['cconvert']: cconvert, // convert
  ['cConvert']: cConvert, // Convert
  ['clow']: clow, // low
  ['cLow']: cLow, // Low
  ['clower']: clower, // lower
  ['cLower']: cLower, // Lower
  ['ccase']: ccase, // case
  ['cCase']: cCase, // Case
  ['cmove']: cmove, // move
  ['cremove']: cremove, // remove
  ['cRemove']: cRemove, // Remove
  ['cExtension']: cExtension, // Extension
  ['cdig']: cdig, // dig
  ['cDig']: cDig, // Dig
  ['cdigit']: cdigit, // digit
  ['cDigit']: cDigit, // Digit
  ['cletter']: cletter, // letter
  ['cLetter']: cLetter, // Letter
  ['cupper']: cupper, // upper
  ['cUpper']: cUpper, // Upper
  ['crandom']: crandom, // random
  ['cRandom']: cRandom, // Random
  ['crandomly']: crandomly, // randomly
  ['cRandomly']: cRandomly, // Randomly
  ['cgenerate']: cgenerate, // generate
  ['cGenerate']: cGenerate, // Generate
  ['cgenerated']: cgenerated, // generated
  ['cGenerated']: cGenerated, // Generated
  ['cparent']: cparent, // parent
  ['cParent']: cParent, // Parent
  ['cvalue']: cvalue, // value
  ['cValue']: cValue, // Value
  ['cvalues']: cvalues, // values
  ['cValues']: cValues, // Values
  ['cfind']: cfind, // find
  ['cFind']: cFind, // Find
  ['cfindvalue']: cfindvalue, // findvalue
  ['cfindValue']: cfindValue, // findValue
  ['cFindValue']: cFindValue, // FindValue
  ['crange']: crange, // range
  ['cRange']: cRange, // Range
  ['cnumeric']: cnumeric, // numeric
  ['cNumeric']: cNumeric, // Numeric
  ['cNumerical']: cNumerical, // Numerical
  ['clength']: clength, // length
  ['cLength']: cLength, // Length
  ['ccode']: ccode, // code
  ['cCode']: cCode, // Code
  ['ceither']: ceither, // either
  ['cEither']: cEither, // Either
  ['cenable']: cenable, // enable
  ['cEnable']: cEnable, // Enable
  ['cenabled']: cenabled, // enabled
  ['cEnabled']: cEnabled, // Enabled
  ['cdetermine']: cdetermine, // determine
  ['cDetermine']: cDetermine, // Determine
  ['cties']: cties, // ties
  ['cTies']: cTies, // Ties
  ['cability']: cability, // ability
  ['cAbility']: cAbility, // Ability
  ['cabilities']: cabilities, // abilities
  ['cAbilities']: cAbilities, // Abilities
  ['cvariable']: cvariable, // variable
  ['cVariable']: cVariable, // Variable
  ['cvariables']: cvariables, // variables
  ['cVariables']: cVariables, // Variables
  ['cvariability']: cvariability, // variability
  ['cVariability']: cVariability, // Variability
  ['cvisibility']: cvisibility, // visibility
  ['cVisibility']: cVisibility, // Visibility
  ['cDialog']: cDialog, // Dialog
  ['clibrary']: clibrary, // library
  ['cLibrary']: cLibrary, // Library
  ['ctable']: ctable, // table
  ['cTable']: cTable, // Table
  ['cequal']: cequal, // equal
  ['cEqual']: cEqual, // Equal
  ['cequals']: cequals, // equals
  ['cEquals']: cEquals, // Equals
  ['cequivalence']: cequivalence, // equivalence
  ['cEquivalence']: cEquivalence, // Equivalence
  ['cRaw']: cRaw, // Raw
  ['cOperation']: cOperation, // Operation
  ['cOperating']: cOperating, // Operating
  ['csystem']: csystem, // system
  ['cSystem']: cSystem, // System
  ['csign']: csign, // sign
  ['cSign']: cSign, // Sign
  ['cassign']: cassign, // assign
  ['cAssign']: cAssign, // Assign
  ['cassignment']: cassignment, // assignment
  ['cAssignment']: cAssignment, // Assignment
  ['cAbreviated']: cAbreviated, // Abreviated
  ['cwait']: cwait, // wait
  ['cWait']: cWait, // Wait
  ['cawait']: cawait, // await
  ['cHTML']: cHTML, // HTML
  ['chtml']: chtml, // html
  ['cinner']: cinner, // inner
  ['cInner']: cInner, // Inner
  ['cOver']: cOver, // Over
  ['cride']: cride, // ride
  ['cRide']: cRide, // Ride
  ['cOverride']: cOverride, // Override
  ['cActionOverride']: cActionOverride, // ActionOverride
  ['cLocator']: cLocator, // Locator
  ['cLocators']: cLocators, // Locators
  ['cLocatorLibrary']: cLocatorLibrary, // LocatorLibrary
  ['cselector']: cselector, // selector
  ['cSelector']: cSelector, // Selector
  ['cSelectors']: cSelectors, // Selectors
  ['cIndividual']: cIndividual, // Individual
  ['cIndividually']: cIndividually, // Individually
  ['cexist']: cexist, // exist
  ['cExist']: cExist, // Exist
  ['cexists']: cexists, // exists
  ['cExists']: cExists, // Exists
  ['cexisted']: cexisted, // existed
  ['cExisted']: cExisted, // Existed
  ['cexisting']: cexisting, // existing
  ['cExisting']: cExisting, // Existing
  ['cAsynch']: cAsynch, // Asynch
  ['cSynch']: cSynch, // Synch
  ['cSingular']: cSingular, // Singular
  ['cParallel']: cParallel, // Parallel
  ['cMulti']: cMulti, // Multi
  ['cUnified']: cUnified, // Unified
  ['cfault']: cfault, // fault
  ['cFault']: cFault, // Fault
  ['cFAULT']: cFAULT, // FAULT
  ['cdefault']: cdefault, // default
  ['cDefault']: cDefault, // Default
  ['cDEFAULT']: cDEFAULT, // DEFAULT
  ['csingle']: csingle, // single
  ['cSingle']: cSingle, // Single
  ['cquote']: cquote, // quote
  ['cQuote']: cQuote, // Quote
  ['cquotes']: cquotes, // quotes
  ['cQuotes']: cQuotes, // Quotes
  ['cquoted']: cquoted, // quoted
  ['cQuoted']: cQuoted, // Quoted
  ['cswap']: cswap, // swap
  ['cSwap']: cSwap, // Swap
  ['cbefore']: cbefore, // before
  ['cBefore']: cBefore, // Before
  ['cBEFORE']: cBEFORE, // BEFORE
  ['cafter']: cafter, // after
  ['cAfter']: cAfter, // After
  ['cAFTER']: cAFTER, // AFTER
  ['cOnce']: cOnce, // Once
  ['cUpload']: cUpload, // Upload
  ['cStyle']: cStyle, // Style
  ['cassert']: cassert, // assert
  ['cAssert']: cAssert, // Assert
  ['cless']: cless, // less
  ['cLess']: cLess, // Less
  ['cgreat']: cgreat, // great
  ['cGreat']: cGreat, // Great
  ['cgreater']: cgreater, // greater
  ['cGreater']: cGreater, // Greater
  ['cthen']: cthen, // then
  ['cThen']: cThen, // Then
  ['cthan']: cthan, // than
  ['cThan']: cThan, // Than
  ['cAssertExists']: cAssertExists, // AssertExists
  ['cAssertNotExists']: cAssertNotExists, // AssertNotExists
  ['cAssertValueEqual']: cAssertValueEqual, // AssertValueEqual
  ['cAssertValueNotEqual']: cAssertValueNotEqual, // AssertValueNotEqual
  ['cAssertValueLessThan']: cAssertValueLessThan, // AssertValueLessThan
  ['cAssertValueGreaterThan']: cAssertValueGreaterThan, // AssertValueGreaterThan
  ['cAssertion']: cAssertion, // Assertion
  ['cAssertionType']: cAssertionType, // AssertionType
  ['cUploadStyle']: cUploadStyle, // UploadStyle
  ['cAssertionStyle']: cAssertionStyle, // AssertionStyle
  ['cby']: cby, // by
  ['cBy']: cBy, // By
  ['cBY']: cBY, // BY
  ['cOr']: cOr, // Or
  ['cor']: cor, // or
  ['cOR']: cOR, // OR
  ['cmix']: cmix, // mix // For some reason JavaScript doesn't like cmi.
  ['cMix']: cMix, // Mix
  ['cmixed']: cmixed, // mixed
  ['cMixed']: cMixed, // Mixed
  ['calpha']: calpha, // alpha
  ['cAlpha']: cAlpha, // Alpha
  ['cbetic']: cbetic, // betic
  ['cAlphabetic']: cAlphabetic, // Alphabetic
  ['ctext']: ctext, // text
  ['cText']: cText, // Text
  ['cTEXT']: cTEXT, // TEXT
  ['ccontext']: ccontext, // context
  ['cContext']: cContext, // Context
  ['cinput']: cinput, // input
  ['cInput']: cInput, // Input
  ['cINPUT']: cINPUT, // INPUT
  ['cinputs']: cinputs, // inputs
  ['cInputs']: cInputs, // Inputs
  ['cinputting']: cinputting, // inputting
  ['cInputting']: cInputting, // Inputting
  ['cdescription']: cdescription, // description
  ['cDescription']: cDescription, // Description
  ['cconstant']: cconstant, //constant
  ['cConstant']: cConstant, // Constant
  ['cconstants']: cconstants, // constants
  ['cConstants']: cConstants, // Constants
  ['citeration']: citeration, // iteration
  ['cIteration']: cIteration, // Iteration
  ['cproject']: cproject, // project
  ['cProject']: cProject, // Project
  ['cProjects']: cProjects, // Projects
  ['cAdvance']: cAdvance, // Advance
  ['cAdvanced']: cAdvanced, // Advanced
  ['cCreation']: cCreation, // Creation
  ['ctestData']: ctestData, // testData
  ['cpageData']: cpageData, // pageData
  ['cPageData']: cPageData, // PageData
  ['cTestName']: cTestName, // TestName
  ['cPageName']: cPageName, // PageName
  ['cbed']: cbed, // bed
  ['cBed']: cBed, // Bed
  ['cbeds']: cbeds, // beds
  ['cBeds']: cBeds, // Beds
  ['cbedded']: cbedded, // bedded
  ['cBedded']: cBedded, // Bedded
  ['cbedding']: cbedding, // bedding
  ['cBedding']: cBedding, // Bedding
  ['cweb']: cweb, // web
  ['cWeb']: cWeb, // Web
  ['cwebs']: cwebs, // webs
  ['cWebs']: cWebs, // Webs
  ['cwebbed']: cwebbed, // webbed
  ['cWebbed']: cWebbed, // webbed
  ['cwebbing']: cwebbing, // webbing
  ['cWebbing']: cWebbing, // Webbing
  ['cWebkey']: cWebkey, // Webkey
  ['cfile']: cfile, // file
  ['cFile']: cFile, // File
  ['cfiles']: cfiles, // files
  ['cFiles']: cFiles, // Files
  ['cfilename']: cfilename, // filename
  ['cFilename']: cFilename, // Filename
  ['cfilenames']: cfilenames, // filenames
  ['cFilenames']: cFilenames, // Filenames
  ['cfold']: cfold, // fold
  ['cFold']: cFold, // Fold
  ['cFolder']: cFolder, // Folder
  ['cfolder']: cfolder, // folder
  ['cfolders']: cfolders, // folders
  ['cFolders']: cFolders, // Folders
  ['ccafe']: ccafe, // cafe
  ['ccert']: ccert, // cert
  ['csrc']: csrc, // src
  ['cbin']: cbin, // bin
  ['cnation']: cnation, // nation
  ['cNation']: cNation, // Nation
  ['csource']: csource, // source
  ['cSource']: cSource, // Source
  ['cdestination']: cdestination, // destination
  ['cDestination']: cDestination, // Destination
  ['cresource']: cresource, // resource
  ['cResource']: cResource, // Resource
  ['cresources']: cresources, // resources
  ['cResources']: cResources, // Resources
  ['cclass']: cclass, // class
  ['cClass']: cClass, // Class
  ['cIngestion']: cIngestion, // Ingestion
  ['cis']: cis, // is
  ['cIs']: cIs, // Is
  ['cIS']: cIS, // IS
  ['ccheck']: ccheck, // check
  ['cCheck']: cCheck, // Check
  ['cchecks']: cchecks, // checks
  ['cChecks']: cChecks, // Checks
  ['cchecked']: cchecked, // checked
  ['cChecked']: cChecked, // Checked
  ['celement']: celement, // element
  ['cElement']: cElement, // Element
  ['celements']: celements, // elements
  ['cElements']: cElements, // Elements
  ['cElementName']: cElementName, // ElementName
  ['callow']: callow, // allow
  ['cAllow']: cAllow, // Allow
  ['callowable']: callowable, // allowable
  ['cAllowable']: cAllowable, // Allowable
  ['chome']: chome, // home
  ['cHome']: cHome, // Home
  ['cpublic']: cpublic, // public
  ['cPublic']: cPublic, // Public
  ['cspecial']: cspecial, // special
  ['cSpecial']: cSpecial, // Special
  ['ccharacter']: ccharacter, // character
  ['cCharacter']: cCharacter, // Character
  ['ccharacters']: ccharacters, // characters
  ['cCharacters']: cCharacters, // Characters
  ['cedge']: cedge, // edge
  ['cEdge']: cEdge, // Edge
  ['cWorks']: cWorks, // Works
  ['csolid']: csolid, // solid
  ['cSolid']: cSolid, // Solid
  ['cBinary']: cBinary, // Binary
  ['cTimeout']: cTimeout, // Timeout
  ['cTimeOut']: cTimeOut, // TimeOut
  ['cDwell']: cDwell, // Dwell
  ['ccut']: ccut, // cut
  ['cCut']: cCut, // Cut
  ['ccuts']: ccuts, // cuts
  ['cCuts']: cCuts, // Cuts
  ['ccutting']: ccutting, // cutting
  ['cCutting']: cCutting, // Cutting
  ['ccute']: ccute, // cute
  ['cCute']: cCute, // Cute
  ['cexecute']: cexecute, // execute
  ['cExecute']: cExecute, // Execute
  ['cexecutes']: cexecutes, // executes
  ['cExecutes']: cExecutes, // Executes
  ['cexecuted']: cexecuted, // executed
  ['cExecuted']: cExecuted, // Executed
  ['cexecuting']: cexecuting, // executing
  ['cExecuting']: cExecuting, // Executing
  ['csibling']: csibling, // sibling
  ['cSibling']: cSibling, // Sibling
  ['cchild']: cchild, // child
  ['cChild']: cChild, // Child
  ['cfilter']: cfilter, // filter
  ['cFilter']: cFilter, // Filter
  ['cattribute']: cattribute, // attribute
  ['cAttribute']: cAttribute, // Attribute
  ['cattributes']: cattributes, // attributes
  ['cAttributes']: cAttributes, // Attributes
  ['cdisabled']: cdisabled, // disabled
  ['cDisabled']: cDisabled, // Disabled
  ['cman']: cman, // man
  ['cMan']: cMan, // Man
  ['cwoman']: cwoman, // woman
  ['cWoman']: cWoman, // Woman
  ['ccell']: ccell, // cell
  ['cCell']: cCell, // Cell
  ['chung']: chung, // hung
  ['cHung']: cHung, // Hung
  ['cport']: cport, // port
  ['cPort']: cPort, // Port
  ['cConstructor']: cConstructor, // Constructor
  ['cwarn']: cwarn, // warn
  ['cWarn']: cWarn, // Warn
  ['cWARN']: cWARN, // WARN
  ['cwarning']: cwarning, // warning
  ['cWarning']: cWarning, // Warning
  ['cWARNING']: cWARNING, // WARNING
  ['cwarnings']: cwarnings, // warnings
  ['cWarnings']: cWarnings, // Warnings
  ['cerror']: cerror, // error
  ['cError']: cError, // Error
  ['cERROR']: cERROR, // ERROR
  ['cash']: cash, // ash
  ['cAsh']: cAsh, // Ash
  ['cdash']: cdash, // dash
  ['cDash']: cDash, // Dash
  ['cboard']: cboard, // board
  ['cDashboard']: cDashboard, // Dashboard
  ['ccompose']: ccompose, // compose
  ['cdecompose']: cdecompose, // decompose
  ['cDecompose']: cDecompose, // Decompose
  ['carray']: carray, // array
  ['cArray']: cArray, // Array
  ['carrays']: carrays, // arrays
  ['cArrays']: cArrays, // Arrays
  ['ccamel']: ccamel, // camel
  ['cCamel']: cCamel, // Camel
  ['cround']: cround, // round
  ['cRound']: cRound, // Round
  ['crounded']: crounded, // rounded
  ['cRounded']: cRounded, // Rounded
  ['cquart']: cquart, // quart
  ['cQuart']: cQuart, // Quart
  ['cquarter']: cquarter, // quarter
  ['cQuarter']: cQuarter, // Quarter
  ['cquaternion']: cquaternion, // quaternion
  ['cQuaternion']: cQuaternion, // Quaternion
  ['cnormal']: cnormal, // normal
  ['cNormal']: cNormal, // Normal
  ['cnormalize']: cnormalize, // normalize
  ['cNormalize']: cNormalize, // Normalize
  ['cnominal']: cnominal, // nominal
  ['cNominal']: cNominal, // Nominal
  ['cdegree']: cdegree, // degree
  ['cDegree']: cDegree, // Degree
  ['cdegrees']: cdegrees, // degrees
  ['cDegrees']: cDegrees, // Degrees
  ['cangle']: cangle, // angle
  ['cAngle']: cAngle, // Angle
  ['ctrap']: ctrap, // trap
  ['cTrap']: cTrap, // Trap
  ['cFraction']: cFraction, // Fraction
  ['cvector']: cvector, // vector
  ['cVector']: cVector, // Vector
  ['cfor']: cfor, // for
  ['cFor']: cFor, // For
  ['cform']: cform, // form
  ['cForm']: cForm, // Form
  ['ctransform']: ctransform, // transform
  ['cTransform']: cTransform, // Transform
  ['cpoint']: cpoint, // point
  ['cPoint']: cPoint, // Point
  ['clocation']: clocation, // location
  ['cLocation']: cLocation, // Location
  ['csort']: csort, // sort
  ['cSort']: cSort, // Sort
  ['csimplify']: csimplify, // simplify
  ['cSimplify']: cSimplify, // Simplify
  ['cconsolidate']: cconsolidate, // consolidate
  ['cConsolidate']: cConsolidate, // Consolidate
  ['cconsolidated']: cconsolidated, // consolidated
  ['cConsolidated']: cConsolidated, // Consolidated
  ['cconsolidates']: cconsolidates, // consolidates
  ['cConsolidates']: cConsolidates, // Consolidates
  ['cconsolidating']: cconsolidating, // consolidating
  ['cConsolidating']: cConsolidating, // Consolidating
  ['care']: care, // are
  ['cAre']: cAre, // Are
  ['cARE']: cARE, // ARE
  ['ccompare']: ccompare, // compare
  ['cCompare']: cCompare, // Compare
  ['ccompares']: ccompares, // compares
  ['cCompares']: cCompares, // Compares
  ['ccompared']: ccompared, // compared
  ['cCompared']: cCompared, // Compared
  ['ccomparing']: ccomparing, // comparing
  ['cComparing']: cComparing, // Comparing
  ['ccomparison']: ccomparison, // comparison
  ['cComparison']: cComparison, // Comparison
  ['ccomparisons']: ccomparisons, // comparisons
  ['cComparisons']: cComparisons, // Comparisons
  ['ccontain']: ccontain, // contain
  ['cContain']: cContain, // Contain
  ['ccontains']: ccontains, // contains
  ['cContains']: cContains, // Contains
  ['ccontained']: ccontained, // contained
  ['cContained']: cContained, // Contained
  ['ccontaining']: ccontaining, // containing
  ['cContaining']: cContaining, // Containing
  ['cvideo']: cvideo, // video
  ['cVideo']: cVideo, // Video
  ['cProduct']: cProduct, // Product
  ['caggregate']: caggregate, // aggregate
  ['cAggregate']: cAggregate, // Aggregate
  ['carguments']: carguments, // arguments
  ['cArguments']: cArguments, // Arguments
  ['cDifference']: cDifference, // Difference
  ['cbet']: cbet, // bet
  ['cBet']: cBet, // Bet
  ['cbetween']: cbetween, // between
  ['cBetween']: cBetween, // Between
  ['ccertain']: ccertain, // certain
  ['cascertain']: cascertain, // ascertain
  ['cAscertain']: cAscertain, // Ascertain
  ['cmatch']: cmatch, // match
  ['cMatch']: cMatch, // Match
  ['cmatching']: cmatching, // matching
  ['cMatching']: cMatching, // Matching
  ['cdoes']: cdoes, // does
  ['cDoes']: cDoes, // Does
  ['cDOES']: cDOES, // DOES
  ['capplication']: capplication, // application
  ['cApplication']: cApplication, // Application
  ['cAPPLICATION']: cAPPLICATION, // APPLICATION
  ['cbuild']: cbuild, // build
  ['cBuild']: cBuild, // Build
  ['cdeploy']: cdeploy, // deploy
  ['cDeploy']: cDeploy, // Deploy
  ['cDEPLOY']: cDEPLOY, // DEPLOY
  ['cdeployment']: cdeployment, // deployment
  ['cDeployment']: cDeployment, // Deployment
  ['clease']: clease, // lease
  ['cLEASE']: cLEASE, // LEASE
  ['crelease']: crelease, // release
  ['cRelease']: cRelease, // Release
  ['cRELEASE']: cRELEASE, // RELEASE
  ['creleases']: creleases, // releases
  ['cReleases']: cReleases, // Releases
  ['creleased']: creleased, // released
  ['cReleased']: cReleased, // Released
  ['creleasing']: creleasing, // releasing
  ['cReleasing']: cReleasing, // Releasing
  ['croot']: croot, // root
  ['cRoot']: cRoot, // Root
  ['cparse']: cparse, // parse
  ['cParse']: cParse, // Parse
  ['cPARSE']: cPARSE, // PARSE
  ['cparser']: cparser, // parser
  ['cParser']: cParser, // Parser
  ['cPARSER']: cPARSER, // PARSER
  ['cparsed']: cparsed, // parsed
  ['cParsed']: cParsed, // Parsed
  ['cparsing']: cparsing, // parsing
  ['cParsing']: cParsing, // Parsing
  ['cforward']: cforward, // forward
  ['cForward']: cForward, // Forward
  ['cslash']: cslash, // slash
  ['cSlash']: cSlash, // Slash
  ['cmeta']: cmeta, // meta
  ['cMeta']: cMeta, // Meta
  ['cmetaData']: cmetaData, // metaData
  ['cMetaData']: cMetaData, // MetaData
  ['cbusiness']: cbusiness, // business
  ['cBusiness']: cBusiness, // Business
  ['crule']: crule, // rule
  ['cRule']: cRule, // Rule
  ['cfresh']: cfresh, // fresh
  ['crefresh']: crefresh, // refresh
  ['cRefresh']: cRefresh, // Refresh
  ['ceval']: ceval, // eval
  ['cEval']: cEval, // Eval
  ['creload']: creload, // reload
  ['cReload']: cReload, // Reload
  ['cdemo']: cdemo, // demo
  ['cDemo']: cDemo, // Demo
  ['ccommon']: ccommon, // common
  ['cCommon']: cCommon, // Common
  ['cfunction']: cfunction, // function
  ['cFunction']: cFunction, // Function
  ['cfunctions']: cfunctions, // functions
  ['cFunctions']: cFunctions, // Functions
  ['cmultiple']: cmultiple, // multiple
  ['cMultiple']: cMultiple, // Multiple
  ['cJournal']: cJournal, // Journal
  ['cExecution']: cExecution, // Execution
  ['cpercent']: cpercent, // percent
  ['cPercent']: cPercent, // Percent
  ['cbasic']: cbasic, // basic
  ['cBasic']: cBasic, // Basic
  ['codd']: codd, // odd
  ['cOdd']: cOdd, // Odd
  ['ceven']: ceven, // even
  ['cEven']: cEven, // Even
  ['cEVEN']: cEVEN, // EVEN
  ['cevent']: cevent, // event
  ['cEvent']: cEvent, // Event
  ['cevents']: cevents, // events
  ['cEvents']: cEvents, // Events
  ['cface']: cface, // face
  ['cFace']: cFace, // Face
  ['cargument']: cargument, // argument
  ['cArgument']: cArgument, // Argument
  ['cdrive']: cdrive, // drive
  ['cDrive']: cDrive, // Drive
  ['cdriven']: cdriven, // driven
  ['cDriven']: cDriven, // Driven
  ['cinterface']: cinterface, // interface
  ['cInterface']: cInterface, // Interface
  ['cfont']: cfont, // font
  ['cFont']: cFont, // Font
  ['cmodule']: cmodule, // module
  ['cModule']: cModule, // Module
  ['ccolor']: ccolor, // color
  ['cColor']: cColor, // Color
  ['ccolors']: ccolors, // colors
  ['cColors']: cColors, // Colors
  ['ccolored']: ccolored, // colored
  ['cColored']: cColored, // Colored
  ['ccolorize']: ccolorize, // colorize
  ['cColorize']: cColorize, // Colorize
  ['ccolorized']: ccolorized, // colorized
  ['cColorized']: cColorized, // Colorized
  ['cold']: cold, // old
  ['cOld']: cOld, // Old
  ['cbold']: cbold, // bold
  ['cBold']: cBold, // Bold
  ['cmost']: cmost, // most
  ['cMost']: cMost, // Most
  ['cpop']: cpop, // pop
  ['cPop']: cPop, // Pop
  ['cPOP']: cPOP, // POP
  ['cpopular']: cpopular, // popular
  ['cPopular']: cPopular, // Popular
  ['calmost']: calmost, // almost
  ['cAlmost']: cAlmost, // Almost
  ['cpal']: cpal, // pal
  ['cPal']: cPal, // Pal
  ['cpalindrome']: cpalindrome, // palindrome
  ['cPalindrome']: cPalindrome, // Palindrome
  ['caverage']: caverage, // average
  ['cAverage']: cAverage, // Average
  ['cclient']: cclient, // client
  ['cClient']: cClient, // Client
  ['crules']: crules, // rules
  ['cRules']: cRules, // Rules
  ['ccustom']: ccustom, // custom
  ['cCustom']: cCustom, // Custom
  ['ccommand']: ccommand, // command
  ['cCommand']: cCommand, // Command
  ['cCOMMAND']: cCOMMAND, // COMMAND
  ['ccommands']: ccommands, // commands
  ['cCommands']: cCommands, // Commands
  ['cqueue']: cqueue, // queue
  ['cQueue']: cQueue, // Queue
  ['cblob']: cblob, // blob
  ['cBlob']: cBlob, // Blob
  ['cframe']: cframe, // frame
  ['cFrame']: cFrame, // Frame
  ['calias']: calias, // alias
  ['cAlias']: cAlias, // Alias
  ['caliases']: caliases, // aliases
  ['cAliases']: cAliases, // Aliases
  ['csequencer']: csequencer, // sequencer
  ['cSequencer']: cSequencer, // Sequencer
  ['cprimary']: cprimary, // primary
  ['cPrimary']: cPrimary, // Primary
  ['csecondary']: csecondary, // secondary
  ['cSecondary']: cSecondary, // Secondary
  ['ctertiary']: ctertiary, // tertiary
  ['cTertiary']: cTertiary, // Tertiary
  ['cdelimit']: cdelimit, // delimit
  ['cDelimit']: cDelimit, // Delimit
  ['cdelimiter']: cdelimiter, // delimiter
  ['cDelimiter']: cDelimiter, // Delimiter
  ['cdelimiters']: cdelimiters, // delimiters
  ['cDelimiters']: cDelimiters, // Delimiters
  ['cdelimited']: cdelimited, // delimited
  ['cDelimited']: cDelimited, // Delimited
  ['cdelimiting']: cdelimiting, // delimiting
  ['cDelimiting']: cDelimiting, // Delimiting
  ['chelp']: chelp, // help
  ['cHelp']: cHelp, // Help
  ['cprint']: cprint, // print
  ['cPrint']: cPrint, // Print
  ['chive']: chive, // hive
  ['cHive']: cHive, // Hive
  ['cgenerator']: cgenerator, // generator
  ['cGenerator']: cGenerator, // Generator
  ['cindex']: cindex, // index
  ['cIndex']: cIndex, // Index
  ['cabout']: cabout, // about
  ['cAbout']: cAbout, // About
  ['cstart']: cstart, // start
  ['cStart']: cStart, // Start
  ['cstarts']: cstarts, // starts
  ['cStarts']: cStarts, // Starts
  ['cstarted']: cstarted, // started
  ['cStarted']: cStarted, // Started
  ['cstartup']: cstartup, // startup
  ['cstarting']: cstarting, // starting
  ['cStarting']: cStarting, // Starting
  ['coutput']: coutput, // output
  ['cOutput']: cOutput, // Output
  ['cmetric']: cmetric, // metric
  ['cMetric']: cMetric, // Metric
  ['cmetrics']: cmetrics, // metrics
  ['cMetrics']: cMetrics, // Metrics
  ['crack']: crack, // rack
  ['cRack']: cRack, // Rack
  ['ctrack']: ctrack, // track
  ['cTrack']: cTrack, // Track
  ['ctracking']: ctracking, // tracking
  ['cTracking']: cTracking, // Tracking
  ['cstack']: cstack, // stack
  ['cStack']: cStack, // Stack
  ['cstandard']: cstandard, // standard
  ['cStandard']: cStandard, // Standard
  ['cdeviation']: cdeviation, // deviation
  ['cDeviation']: cDeviation, // Deviation
  ['canalysis']: canalysis, // analysis
  ['cAnalysis']: cAnalysis, // Analysis
  ['cclear']: cclear, // clear
  ['cClear']: cClear, // Clear
  ['cversion']: cversion, // version
  ['cVersion']: cVersion, // Version
  ['ccontrol']: ccontrol, // control
  ['cControl']: cControl, // Control
  ['ccontrols']: ccontrols, // controls
  ['cControls']: cControls, // Controls
  ['ccontrolled']: ccontrolled, // controlled
  ['cControlled']: cControlled, // Controlled
  ['ccontrolling']: ccontrolling, // controlling
  ['cControlling']: cControlling, // Controlling
  ['ccontroller']: ccontroller, // controller
  ['cController']: cController, // Controller
  ['ccontrollers']: ccontrollers, // controllers
  ['cControllers']: cControllers, // Controllers
  ['cperform']: cperform, // perform
  ['cPerform']: cPerform, // Perform
  ['cperformance']: cperformance, // performance
  ['cPerformance']: cPerformance, // Performance
  ['cconversion']: cconversion, // conversion
  ['cConversion']: cConversion, // Conversion
  ['cpass']: cpass, // pass
  ['cPass']: cPass, // Pass
  ['cPASS']: cPASS, // PASS
  ['cpassed']: cpassed, // passed
  ['cPassed']: cPassed, // Passed
  ['cPASSED']: cPASSED, // PASSED
  ['cpassing']: cpassing, // passing
  ['cPassing']: cPassing, // Passing
  ['cbypass']: cbypass, // bypass
  ['cBypass']: cBypass, // Bypass
  ['cbypasses']: cbypasses, // bypasses
  ['cBypasses']: cBypasses, // Bypasses
  ['cbypassed']: cbypassed, // bypassed
  ['cBypassed']: cBypassed, // Bypassed
  ['cbypassing']: cbypassing, // bypassing
  ['cBypassing']: cBypassing, // Bypassing
  ['cfail']: cfail, // fail
  ['cFail']: cFail, // Fail
  ['cFAIL']: cFAIL, // FAIL
  ['cfailed']: cfailed, // failed
  ['cFailed']: cFailed, // Failed
  ['cFAILED']: cFAILED, // FAILED
  ['cfailure']: cfailure, // failure
  ['cFailure']: cFailure, // Failure
  ['csimplified']: csimplified, // simplified
  ['cSimplified']: cSimplified, // Simplified
  ['ctraditional']: ctraditional, // traditional
  ['cTraditional']: cTraditional, // Traditional
  ['cground']: cground, // ground
  ['cGround']: cGround, // Ground
  ['cyell']: cyell, // yell
  ['cYell']: cYell, // Yell
  ['clack']: clack, // lack
  ['cLack']: cLack, // Lack
  ['clane']: clane, // lane
  ['cLane']: cLane, // Lane
  ['csection']: csection, // section
  ['cSection']: cSection, // Section
  ['csections']: csections, // sections
  ['cSections']: cSections, // Sections
  ['cunit']: cunit, // unit
  ['cUnit']: cUnit, // Unit
  ['cunits']: cunits, // units
  ['cUnits']: cUnits, // Units
  ['cgeneric']: cgeneric, // generic
  ['cGeneric']: cGeneric, // Generic
  ['cisotope']: cisotope, // isotope
  ['cIsotope']: cIsotope, // Isotope
  ['cphonic']: cphonic, // phonic
  ['cPhonic']: cPhonic, // Phonic
  ['cphonics']: cphonics, // phonics
  ['cPhonics']: cPhonics, // Phonics
  ['cshape']: cshape, // shape
  ['cShape']: cShape, // Shape
  ['cexport']: cexport, // export
  ['cExport']: cExport, // Export
  ['cplay']: cplay, // play
  ['cPlay']: cPlay, // Play
  ['cdisplay']: cdisplay, // display
  ['cDisplay']: cDisplay, // Display
  ['csum']: csum, // sum
  ['cSum']: cSum, // Sum
  ['csummary']: csummary, // summary
  ['cSummary']: cSummary, // Summary
  ['csuggest']: csuggest, // suggest
  ['cSuggest']: cSuggest, // Suggest
  ['csuggested']: csuggested, // suggested
  ['cSuggested']: cSuggested, // Suggested
  ['cline']: cline, // line
  ['cLine']: cLine, // Line
  ['cdocument']: cdocument, // document
  ['cDocument']: cDocument, // Document
  ['cqualified']: cqualified, // qualified
  ['cQualified']: cQualified, // Qualified
  ['cfix']: cfix, // fix
  ['cFix']: cFix, // Fix
  ['cprefix']: cprefix, // prefix
  ['cPrefix']: cPrefix, // Prefix
  ['csuffix']: csuffix, // suffix
  ['cSuffix']: cSuffix, // Suffix
  ['cdevelop']: cdevelop, // develop
  ['cDevelop']: cDevelop, // Develop
  ['cDEVELOP']: cDEVELOP, // DEVELOP
  ['cdevelopment']: cdevelopment, // development
  ['cDevelopment']: cDevelopment, // Development
  ['cDEVELOPMENT']: cDEVELOPMENT, // DEVELOPMENT
  ['cproduction']: cproduction, // production
  ['cProduction']: cProduction, // Production
  ['cPRODUCTION']: cPRODUCTION, // PRODUCTION
  ['cstorage']: cstorage, // storage
  ['cStorage']: cStorage, // Storage
  ['cstore']: cstore, // store
  ['cStore']: cStore, // Store
  ['cstored']: cstored, // stored
  ['cStored']: cStored, // Stored
  ['cunique']: cunique, // unique
  ['cUnique']: cUnique, // Unique
  ['cduplicate']: cduplicate, // duplicate
  ['cDuplicate']: cDuplicate, // Duplicate
  ['cplease']: cplease, // please
  ['cPlease']: cPlease, // Please
  ['center']: center, // enter
  ['cEnter']: cEnter, // Enter
  ['centers']: centers, // enters
  ['cEnters']: cEnters, // Enters
  ['centered']: centered, // entered
  ['cEntered']: cEntered, // Entered
  ['centering']: centering, // entering
  ['cEntering']: cEntering, // Entering
  ['cwere']: cwere, // were
  ['cWere']: cWere, // Were
  ['cwhere']: cwhere, // where
  ['cWhere']: cWhere, // Where
  ['cher']: cher, // her
  ['cHer']: cHer, // Her
  ['chim']: chim, // him
  ['cHim']: cHim, // Him
  ['chers']: chers, // hers
  ['cHers']: cHers, // Hers
  ['chis']: chis, // his
  ['cHis']: cHis, // His
  ['cthem']: cthem, // them
  ['cThem']: cThem, // Them
  ['cthose']: cthose, // those
  ['cThose']: cThose, // Those
  ['cthat']: cthat, // that
  ['cThat']: cThat, // That
  ['cthis']: cthis, // this
  ['cThis']: cThis, // This
  ['cwhen']: cwhen, // when
  ['cWhen']: cWhen, // When
  ['cwhat']: cwhat, // what
  ['cWhat']: cWhat, // What
  ['chow']: chow, // how
  ['cHow']: cHow, // How
  ['cwhy']: cwhy, // why
  ['cWhy']: cWhy, // Why
  ['cother']: cother, // other
  ['cOther']: cOther, // Other
  ['cabreviation']: cabreviation, // abreviation
  ['cAbreviation']: cAbreviation, // Abreviation
  ['cabreviations']: cabreviations, // abreviations
  ['cAbreviations']: cAbreviations, // Abreviations
  ['cacronym']: cacronym, // acronym
  ['cAcronym']: cAcronym, // Acronym
  ['cacronyms']: cacronyms, // acronyms
  ['cAcronyms']: cAcronyms, // Acronyms
  ['csolve']: csolve, // solve
  ['cSolve']: cSolve, // Solve
  ['cLehmer']: cLehmer, // Lehmer
  ['cdeep']: cdeep, // deep
  ['cDeep']: cDeep, // Deep
  ['cclone']: cclone, // clone
  ['cClone']: cClone, // Clone
  ['ccursive']: ccursive, // cursive
  ['cCursive']: cCursive, // Cursive
  ['crecursive']: crecursive, // recursive
  ['cRecursive']: cRecursive, // Recursive
  ['cexpansion']: cexpansion, // expansion
  ['cExpansion']: cExpansion, // Expansion
  ['cscreen']: cscreen, // screen
  ['cScreen']: cScreen, // Screen
  ['cyou']: cyou, // you
  ['cYou']: cYou, // You
  ['cwould']: cwould, // would
  ['cWould']: cWould, // Would
  ['cshould']: cshould, // should
  ['cShould']: cShould, // Should
  ['ccould']: ccould, // could
  ['cCould']: cCould, // Could
  ['clike']: clike, // like
  ['cLike']: cLike, // Like
  ['cfine']: cfine, // fine
  ['cFine']: cFine, // Fine
  ['cdefine']: cdefine, // define
  ['cDefine']: cDefine, // Define
  ['cdefined']: cdefined, // defined
  ['cDefined']: cDefined, // Defined
  ['cdefines']: cdefines, // defines
  ['cDefines']: cDefines, // Defines
  ['cdefining']: cdefining, // defining
  ['cDefining']: cDefining, // Defining
  ['cfill']: cfill, // fill
  ['cFill']: cFill, // Fill
  ['cfulfillment']: cfulfillment, // fulfillment
  ['cFulfillment']: cFulfillment, // Fulfillment
  ['coptimized']: coptimized, // optimized
  ['cOptimized']: cOptimized, // Optimized
  ['csome']: csome, // some
  ['cSome']: cSome, // Some
  ['ccomb']: ccomb, // comb
  ['cComb']: cComb, // Comb
  ['ccombine']: ccombine, // combine
  ['cCombine']: cCombine, // Combine
  ['ccombines']: ccombines, // combines
  ['cCombines']: cCombines, // Combines
  ['ccombined']: ccombined, // combined
  ['cCombined']: cCombined, // Combined
  ['ccombining']: ccombining, // combining
  ['cCombining']: cCombining, // Combining
  ['crecombine']: crecombine, // recombine
  ['cRecombine']: cRecombine, // Recombine
  ['ccombination']: ccombination, // combination
  ['cCombination']: cCombination, // Combination
  ['ccombinations']: ccombinations, // combinations
  ['cCombinations']: cCombinations, // Combinations
  ['crecognizer']: crecognizer, // recognizer
  ['cRecognizer']: cRecognizer, // Recognizer
  ['cpat']: cpat, // pat
  ['cPat']: cPat, // Pat
  ['cpatt']: cpatt, // patt
  ['cPatt']: cPatt, // Patt
  ['cpattern']: cpattern, // pattern
  ['cPattern']: cPattern, // Pattern
  ['cpatterns']: cpatterns, // patterns
  ['cPatterns']: cPatterns, // Patterns
  ['ccoma']: ccoma, // coma
  ['cComa']: cComa, // Coma
  ['ccomas']: ccomas, // comas
  ['cComas']: cComas, // Comas
  ['cseparate']: cseparate, // separate
  ['cSeparate']: cSeparate, // Separate
  ['cseparated']: cseparated, // separated
  ['cSeparated']: cSeparated, // Separated
  ['csea']: csea, // sea
  ['cSea']: cSea, // Sea
  ['csearch']: csearch, // search
  ['cSearch']: cSearch, // Search
  ['csearches']: csearches, // searches
  ['cSearches']: cSearches, // Searches
  ['csearched']: csearched, // searched
  ['cSearched']: cSearched, // Searched
  ['csearching']: csearching, // searching
  ['cSearching']: cSearching, // Searching
  ['cneed']: cneed, // need
  ['cNeed']: cNeed, // Need
  ['cimplement']: cimplement, // implement
  ['cImplement']: cImplement, // Implement
  ['cimplements']: cimplements, // implements
  ['cImplements']: cImplements, // Implements
  ['cimplementation']: cimplementation, // implementation
  ['cImplementation']: cImplementation, // Implementation
  ['cgoing']: cgoing, // going
  ['cGoing']: cGoing, // Going
  ['cmain']: cmain, // main
  ['cMain']: cMain, // Main
  ['cprogram']: cprogram, // program
  ['cProgram']: cProgram, // Program
  ['cloop']: cloop, // loop
  ['cLoop']: cLoop, // Loop
  ['cgood']: cgood, // good
  ['cGood']: cGood, // Good
  ['cbye']: cbye, // bye
  ['cBye']: cBye, // Bye
  ['chave']: chave, // have
  ['cHave']: cHave, // Have
  ['cnice']: cnice, // nice
  ['cNice']: cNice, // Nice
  ['cday']: cday, // day
  ['cDay']: cDay, // Day
  ['cstay']: cstay, // stay
  ['cStay']: cStay, // Stay
  ['csafe']: csafe, // safe
  ['cSafe']: cSafe, // Safe
  ['cwas']: cwas, // was
  ['cWas']: cWas, // Was
  ['cbig']: cbig, // big
  ['cBig']: cBig, // Big
  ['cbigger']: cbigger, // bigger
  ['cBigger']: cBigger, // Bigger
  ['cbiggest']: cbiggest, // biggest
  ['cBiggest']: cBiggest, // Biggest
  ['cspecific']: cspecific, // specific
  ['cSpecific']: cSpecific, // Specific
  ['cspecified']: cspecified, // specified
  ['cSpecified']: cSpecified, // Specified
  ['cdomain']: cdomain, // domain
  ['cDomain']: cDomain, // Domain
  ['cmode']: cmode, // mode
  ['cMode']: cMode, // Mode
  ['csymbol']: csymbol, // symbol
  ['cSymbol']: cSymbol, // Symbol
  ['csymbols']: csymbols, // symbols
  ['cSymbols']: cSymbols, // Symbols
  ['cresolve']: cresolve, // resolve
  ['cResolve']: cResolve, // Resolve
  ['cresolved']: cresolved, // resolved
  ['cResolved']: cResolved, // Resolved
  ['cresolving']: cresolving, // resolving
  ['cResolving']: cResolving, // Resolving
  ['cvariation']: cvariation, // variation
  ['cVariation']: cVariation, // Variation
  ['cterm']: cterm, // term
  ['cTerm']: cTerm, // Term
  ['ccost']: ccost, // cost
  ['cCost']: cCost, // Cost
  ['cperiod']: cperiod, // period
  ['cPeriod']: cPeriod, // Period
  ['ccannot']: ccannot, // cannot
  ['cCannot']: cCannot, // Cannot
  ['cnothing']: cnothing, // nothing
  ['cNothing']: cNothing, // Nothing
  ['cnothingness']: cnothingness, // nothingness
  ['cNothingness']: cNothingness, // Nothingness
  ['cused']: cused, // used
  ['cUsed']: cUsed, // Used
  ['cusing']: cusing, // using
  ['cUsing']: cUsing, // Using
  ['cbreak']: cbreak, // break
  ['cBreak']: cBreak, // Break
  ['cinto']: cinto, // into
  ['cInto']: cInto, // Into
  ['cunable']: cunable, // unable
  ['cUnable']: cUnable, // Unable
  ['cnow']: cnow, // now
  ['cNow']: cNow, // Now
  ['cknow']: cknow, // know
  ['cKnow']: cKnow, // Know
  ['cknown']: cknown, // known
  ['cKnown']: cKnown, // Known
  ['cunknown']: cunknown, // unknown
  ['cUnknown']: cUnknown, // Unknown
  ['ctemp']: ctemp, // temp
  ['cTemp']: cTemp, // Temp
  ['ctempt']: ctempt, // tempt
  ['cTempt']: cTempt, // Tempt
  ['cattempt']: cattempt, // attempt
  ['cAttempt']: cAttempt, // Attempt
  ['cattempts']: cattempts, // attempts
  ['cAttempts']: cAttempts, // Attempts
  ['cattempted']: cattempted, // attempted
  ['cAttempted']: cAttempted, // Attempted
  ['cattempting']: cattempting, // attempting
  ['cAttempting']: cAttempting, // Attempting
  ['cmat']: cmat, // mat
  ['cMat']: cMat, // Mat
  ['cformat']: cformat, // format
  ['cFormat']: cFormat, // Format
  ['cformats']: cformats, // formats
  ['cFormats']: cFormats, // Formats
  ['cformatted']: cformatted, // formatted
  ['cFormatted']: cFormatted, // Formatted
  ['cformatting']: cformatting, // formatting
  ['cFormatting']: cFormatting, // Formatting
  ['creformat']: creformat, // reformat
  ['cReformat']: cReformat, // Reformat
  ['creformats']: creformats, // reformats
  ['cReformats']: cReformats, // Reformats
  ['creformated']: creformated, // reformatted
  ['cReformated']: cReformated, // Reformatted
  ['creformating']: creformating, // reformatting
  ['cReformating']: cReformating, // Reformatting
  ['ccorrect']: ccorrect, // correct
  ['cCorrect']: cCorrect, // Correct
  ['ccorrects']: ccorrects, // corrects
  ['cCorrects']: cCorrects, // Corrects
  ['ccorrected']: ccorrected, // corrected
  ['cCorrected']: cCorrected, // Corrected
  ['ccorrectly']: ccorrectly, // correctly
  ['cCorrectly']: cCorrectly, // Correctly
  ['ccorrecting']: ccorrecting, // correcting
  ['cCorrecting']: cCorrecting, // Correcting
  ['cbut']: cbut, // but
  ['cBut']: cBut, // But
  ['crent']: crent, // rent
  ['cRent']: cRent, // Rent
  ['ccurrent']: ccurrent, // current
  ['cCurrent']: cCurrent, // Current
  ['cdelta']: cdelta, // delta
  ['cDelta']: cDelta, // Delta
  ['cbeing']: cbeing, // being
  ['cBeing']: cBeing, // Being
  ['cskip']: cskip, // skip
  ['cSkip']: cSkip, // Skip
  ['cskips']: cskips, // skips
  ['cSkips']: cSkips, // Skips
  ['cskiped']: cskiped, // skiped
  ['cSkiped']: cSkiped, // Skiped
  ['cskiping']: cskiping, // skiping
  ['cSkiping']: cSkiping, // Skiping
  ['chad']: chad, // had
  ['cHad']: cHad, // Had
  ['cchange']: cchange, // change
  ['cChange']: cChange, // Change
  ['cCHANGE']: cCHANGE, // CHANGE
  ['cpush']: cpush, // push
  ['cPush']: cPush, // Push
  ['cPUSH']: cPUSH, // PUSH
  ['cpushes']: cpushes, // pushes
  ['cPushes']: cPushes, // Pushes
  ['cpushed']: cpushed, // pushed
  ['cPushed']: cPushed, // Pushed
  ['cpushing']: cpushing, // pushing
  ['cPushing']: cPushing, // Pushing
  ['cexpand']: cexpand, // expand
  ['cExpand']: cExpand, // Expand
  ['cexpands']: cexpands, // expands
  ['cExpands']: cExpands, // Expands
  ['cexpanded']: cexpanded, // expanded
  ['cExpanded']: cExpanded, // Expanded
  ['cexpanding']: cexpanding, // expanding
  ['cExpanding']: cExpanding, // Expanding
  ['ccall']: ccall, // call
  ['cCall']: cCall, // Call
  ['ccalls']: ccalls, // calls
  ['cCalls']: cCalls, // Calls
  ['ccalled']: ccalled, // called
  ['cCalled']: cCalled, // Called
  ['ccalling']: ccalling, // calling
  ['cCalling']: cCalling, // Calling
  ['clook']: clook, // look
  ['cLook']: cLook, // Look
  ['clooks']: clooks, // looks
  ['cLooks']: cLooks, // Looks
  ['clooked']: clooked, // looked
  ['cLooked']: cLooked, // Looked
  ['clooking']: clooking, // looking
  ['cLooking']: cLooking, // Looking
  ['clookup']: clookup, // lookup
  ['cLookup']: cLookup, // Lookup
  ['celse']: celse, // else
  ['cElse']: cElse, // Else
  ['cfar']: cfar, // far
  ['cFar']: cFar, // Far
  ['cspecify']: cspecify, // specify
  ['cSpecify']: cSpecify, // Specify
  ['csupport']: csupport, // support
  ['cSupport']: cSupport, // Support
  ['csupports']: csupports, // supports
  ['cSupports']: cSupports, // Supports
  ['csupported']: csupported, // supported
  ['cSupported']: cSupported, // Supported
  ['csupporting']: csupporting, // supporting
  ['cSupporting']: cSupporting, // Supporting
  ['cfound']: cfound, // found
  ['cFound']: cFound, // Found
  ['cfounded']: cfounded, // founded
  ['cFounded']: cFounded, // Founded
  ['cunfounded']: cunfounded, // unfounded
  ['cUnfounded']: cUnfounded, // Unfounded
  ['coriginal']: coriginal, // original
  ['cOriginal']: cOriginal, // Original
  ['coriginals']: coriginals, // originals
  ['cOriginals']: cOriginals, // Originals
  ['ccause']: ccause, // cause
  ['cCause']: cCause, // Cause
  ['cbecause']: cbecause, // because
  ['cBecause']: cBecause, // Because
  ['canother']: canother, // another
  ['cAnother']: cAnother, // Another
  ['cparameter']: cparameter, // parameter
  ['cParameter']: cParameter, // Parameter
  ['cparameters']: cparameters, // parameters
  ['cParameters']: cParameters, // Parameters
  ['ctry']: ctry, // try
  ['cTry']: cTry, // Try
  ['ctried']: ctried, // tried
  ['cTried']: cTried, // Tried
  ['ctrying']: ctrying, // trying
  ['cTrying']: cTrying, // Trying
  ['cgain']: cgain, // gain
  ['cGain']: cGain, // Gain
  ['cagain']: cagain, // again
  ['cAgain']: cAgain, // Again
  ['ctent']: ctent, // tent
  ['cTent']: cTent, // Tent
  ['ctents']: ctents, // tents
  ['cTents']: cTents, // Tents
  ['ctenting']: ctenting, // tenting
  ['cTenting']: cTenting, // Tenting
  ['ccontent']: ccontent, // content
  ['cContent']: cContent, // Content
  ['ccontents']: ccontents, // contents
  ['cContents']: cContents, // Contents
  ['cmust']: cmust, // must
  ['cMust']: cMust, // Must
  ['cprompt']: cprompt, // prompt
  ['cPrompt']: cPrompt, // Prompt
  ['cexample']: cexample, // example
  ['cExample']: cExample, // Example
  ['cEXAMPLE']: cEXAMPLE, // EXAMPLE
  ['cstructure']: cstructure, // structure
  ['cStructure']: cStructure, // Structure
  ['cstructured']: cstructured, // structured
  ['cStructured']: cStructured, // Structured
  ['cstructures']: cstructures, // structures
  ['cStructures']: cStructures, // Structures
  ['cmore']: cmore, // more
  ['cMore']: cMore, // More
  ['chas']: chas, // has
  ['cHas']: cHas, // Has
  ['cready']: cready, // ready
  ['cReady']: cReady, // Ready
  ['cREADY']: cREADY, // READY
  ['calready']: calready, // already
  ['cAlready']: cAlready, // Already
  ['cALREADY']: cALREADY, // ALREADY
  ['cbeen']: cbeen, // been
  ['cBeen']: cBeen, // Been
  ['cfollow']: cfollow, // follow
  ['cFollow']: cFollow, // Follow
  ['cfollowes']: cfollowes, // followes
  ['cFollowes']: cFollowes, // Followes
  ['cfollowed']: cfollowed, // followed
  ['cFollowed']: cFollowed, // Followed
  ['cfollowing']: cfollowing, // following
  ['cFollowing']: cFollowing, // Following
  ['cdefinition']: cdefinition, // definition
  ['cDefinition']: cDefinition, // Definition
  ['cdefinitions']: cdefinitions, // definitions
  ['cDefinitions']: cDefinitions, // Definitions
  ['cdone']: cdone, // done
  ['cDone']: cDone, // Done
  ['cDONE']: cDONE, // DONE
  ['cphase']: cphase, // phase
  ['cPhase']: cPhase, // Phase
  ['cphases']: cphases, // phases
  ['cPhases']: cPhases, // Phases
  ['cphased']: cphased, // phased
  ['cPhased']: cPhased, // Phased
  ['cphasing']: cphasing, // phasing
  ['cPhasing']: cPhasing, // Phasing
  ['ctick']: ctick, // tick
  ['cTick']: cTick, // Tick
  ['cyay']: cyay, // yay
  ['cYay']: cYay, // Yay
  ['cYAY']: cYAY, // YAY
  ['ctag']: ctag, // tag
  ['cTag']: cTag, // Tag
  ['ctags']: ctags, // tags
  ['cTags']: cTags, // Tags
  ['ctagged']: ctagged, // tagged
  ['cTagged']: cTagged, // Tagged
  ['ctagging']: ctagging, // tagging
  ['cTagging']: cTagging, // Tagging
  ['clit']: clit, // lit
  ['cLit']: cLit, // Lit
  ['csplit']: csplit, // split
  ['cSplit']: cSplit, // Split
  ['csplits']: csplits, // splits
  ['cSplits']: cSplits, // Splits
  ['csplitting']: csplitting, // splitting
  ['cSplitting']: cSplitting, // Splitting
  ['cdoing']: cdoing, // doing
  ['cDoing']: cDoing, // Doing
  ['cstraight']: cstraight, // straight
  ['cStraight']: cStraight, // Straight
  ['cbroker']: cbroker, // broker
  ['cBroker']: cBroker, // Broker
  ['cpost']: cpost, // post
  ['cPost']: cPost, // Post
  ['cposts']: cposts, // posts
  ['cPosts']: cPosts, // Posts
  ['cposted']: cposted, // posted
  ['cPosted']: cPosted, // Posted
  ['cposting']: cposting, // posting
  ['cPosting']: cPosting, // Posting
  ['cmerge']: cmerge, // merge
  ['cMerge']: cMerge, // Merge
  ['cMERGE']: cMERGE, // MERGE
  ['cmerges']: cmerges, // merges
  ['cMerges']: cMerges, // Merges
  ['cmerged']: cmerged, // merged
  ['cMerged']: cMerged, // Merged
  ['cMERGED']: cMERGED, // MERGED
  ['cmerging']: cmerging, // merging
  ['cMerging']: cMerging, // Merging
  ['cinclude']: cinclude, // include
  ['cInclude']: cInclude, // Include
  ['cincludes']: cincludes, // includes
  ['cIncludes']: cIncludes, // Includes
  ['cincluded']: cincluded, // included
  ['cIncluded']: cIncluded, // Included
  ['cincluding']: cincluding, // including
  ['cIncluding']: cIncluding, // Including
  ['cfinal']: cfinal, // final
  ['cFinal']: cFinal, // Final
  ['cfinals']: cfinals, // finals
  ['cFinals']: cFinals, // Finals
  ['cfinally']: cfinally, // finally
  ['cFinally']: cFinally, // Finally
  ['ccaught']: ccaught, // caught
  ['cCaught']: cCaught, // Caught
  ['cflat']: cflat, // flat
  ['cFlat']: cFlat, // Flat
  ['cflats']: cflats, // flats
  ['cFlats']: cFlats, // Flats
  ['cflatten']: cflatten, // flatten
  ['cFlatten']: cFlatten, // Flatten
  ['cflattened']: cflattened, // flattened
  ['cFlattened']: cFlattened, // Flattened
  ['cflattening']: cflattening, // flattening
  ['cFlattening']: cFlattening, // Flattening
  ['cside']: cside, // side
  ['cSide']: cSide, // Side
  ['csides']: csides, // sides
  ['cSides']: cSides, // Sides
  ['csided']: csided, // sided
  ['cSided']: cSided, // Sided
  ['csiding']: csiding, // siding
  ['cSiding']: cSiding, // Siding
  ['cinside']: cinside, // inside
  ['cInside']: cInside, // Inside
  ['ctarget']: ctarget, // target
  ['cTarget']: cTarget, // Target
  ['ctargets']: ctargets, // targets
  ['cTargets']: cTargets, // Targets
  ['ctargeted']: ctargeted, // targeted
  ['cTargeted']: cTargeted, // Targeted
  ['ctargeting']: ctargeting, // targeting
  ['cTargeting']: cTargeting, // Targeting
  ['cmodify']: cmodify, // modify
  ['cModify']: cModify, // Modify
  ['cmodified']: cmodified, // modified
  ['cModified']: cModified, // Modified
  ['cmodifies']: cmodifies, // modifies
  ['cModifies']: cModifies, // Modifies
  ['cmodifying']: cmodifying, // modifying
  ['cModifying']: cModifying, // Modifying
  ['creference']: creference, // reference
  ['cReference']: cReference, // Reference
  ['creferences']: creferences, // references
  ['cReferences']: cReferences, // References
  ['creferenced']: creferenced, // referenced
  ['cReferenced']: cReferenced, // Referenced
  ['creferencing']: creferencing, // referencing
  ['cReferencing']: cReferencing, // Referencing
  ['cwrite']: cwrite, // write
  ['cWrite']: cWrite, // Write
  ['cwrites']: cwrites, // writes
  ['cWrites']: cWrites, // Writes
  ['cwritten']: cwritten, // written
  ['cWritten']: cWritten, // Written
  ['cwriting']: cwriting, // writing
  ['cWriting']: cWriting, // Writing
  ['cscan']: cscan, // scan
  ['cScan']: cScan, // Scan
  ['cscans']: cscans, // scans
  ['cScans']: cScans, // Scans
  ['cscanned']: cscanned, // scanned
  ['cScanned']: cScanned, // Scanned
  ['cscanning']: cscanning, // scanning
  ['cScanning']: cScanning, // Scanning
  ['cdirect']: cdirect, // direct
  ['cDirect']: cDirect, // Direct
  ['cdirects']: cdirects, // directs
  ['cDirects']: cDirects, // Directs
  ['cdirected']: cdirected, // directed
  ['cDirected']: cDirected, // Directed
  ['cdirector']: cdirector, // director
  ['cDirector']: cDirector, // Director
  ['cdirecting']: cdirecting, // directing
  ['cDirecting']: cDirecting, // Directing
  ['cdirectors']: cdirectors, // directors
  ['cDirectors']: cDirectors, // Directors
  ['cdirectory']: cdirectory, // directory
  ['cDirectory']: cDirectory, // Directory
  ['cdirectories']: cdirectories, // directories
  ['cDirectories']: cDirectories, // Directories
  ['cchive']: cchive, // chive
  ['cChive']: cChive, // Chive
  ['cchives']: cchives, // chives
  ['cChives']: cChives, // Chives
  ['carchive']: carchive, // archive
  ['cArchive']: cArchive, // Archive
  ['carchived']: carchived, // archived
  ['cArchived']: cArchived, // Archived
  ['carchives']: carchives, // archives
  ['cArchives']: cArchives, // Archives
  ['carchiving']: carchiving, // archiving
  ['cArchiving']: cArchiving, // Archiving
  ['ccop']: ccop, // cop
  ['cCop']: cCop, // Cop
  ['ccops']: ccops, // cops
  ['cCops']: cCops, // Cops
  ['ccopy']: ccopy, // copy
  ['cCopy']: cCopy, // Copy
  ['ccopies']: ccopies, // copies
  ['cCopies']: cCopies, // Copies
  ['ccopied']: ccopied, // copied
  ['cCopied']: cCopied, // Copied
  ['ccopying']: ccopying, // copying
  ['cCopying']: cCopying, // Copying
  ['csuccess']: csuccess, // success
  ['cSuccess']: cSuccess, // Success
  ['csuccesses']: csuccesses, // successes
  ['cSuccesses']: cSuccesses, // Successes
  ['csuccessful']: csuccessful, // successful
  ['cSuccessful']: cSuccessful, // Successful
  ['cpack']: cpack, // pack
  ['cPack']: cPack, // Pack
  ['cpacks']: cpacks, // packs
  ['cPacks']: cPacks, // Packs
  ['cpacked']: cpacked, // packed
  ['cPacked']: cPacked, // Packed
  ['cpacking']: cpacking, // packing
  ['cPacking']: cPacking, // Packing
  ['cpackage']: cpackage, // package
  ['cPackage']: cPackage, // Package
  ['cpackages']: cpackages, // packages
  ['cPackages']: cPackages, // Packages
  ['cpackaged']: cpackaged, // packaged
  ['cPackaged']: cPackaged, // Packaged
  ['cpackaging']: cpackaging, // packaging
  ['cPackaging']: cPackaging, // Packaging
  ['canalyze']: canalyze, // analyze
  ['cAnalyze']: cAnalyze, // Analyze
  ['canalyzes']: canalyzes, // analyzes
  ['cAnalyzes']: cAnalyzes, // Analyzes
  ['canalyzed']: canalyzed, // analyzed
  ['cAnalyzed']: cAnalyzed, // Analyzed
  ['canalyzing']: canalyzing, // analyzing
  ['cAnalyzing']: cAnalyzing, // Analyzing
  ['csame']: csame, // same
  ['cSame']: cSame, // Same
  ['cthere']: cthere, // there
  ['cThere']: cThere, // There
  ['cbracket']: cbracket, // bracket
  ['cBracket']: cBracket, // Bracket
  ['cbrackets']: cbrackets, // brackets
  ['cBrackets']: cBrackets, // Brackets
  ['cbracketed']: cbracketed, // bracketed
  ['cBracketed']: cBracketed, // Bracketed
  ['cbracketing']: cbracketing, // bracketing
  ['cBracketing']: cBracketing, // Bracketing
  ['cregular']: cregular, // regular
  ['cRegular']: cRegular, // Regular
  ['cexpression']: cexpression, // expression
  ['cExpression']: cExpression, // Expression
  ['cexpressions']: cexpressions, // expressions
  ['cExpressions']: cExpressions, // Expressions
  ['clexical']: clexical, // lexical
  ['cLexical']: cLexical, // Lexical
  ['clexicon']: clexicon, // lexicon
  ['cLexicon']: cLexicon, // Lexicon
  ['clexicons']: clexicons, // lexicons
  ['cLexicons']: cLexicons, // Lexicons
  ['cjust']: cjust, // just
  ['cJust']: cJust, // Just
  ['cjustice']: cjustice, // justice
  ['cJustice']: cJustice, // Justice
  ['cjustified']: cjustified, // justified
  ['cJustified']: cJustified, // Justified
  ['cadjust']: cadjust, // adjust
  ['cAdjust']: cAdjust, // Adjust
  ['cadjusts']: cadjusts, // adjusts
  ['cAdjusts']: cAdjusts, // Adjusts
  ['cadjusted']: cadjusted, // adjusted
  ['cAdjusted']: cAdjusted, // Adjusted
  ['cadjusting']: cadjusting, // adjusting
  ['cAdjusting']: cAdjusting, // Adjusting
  ['csleep']: csleep, // sleep
  ['cSleep']: cSleep, // Sleep
  ['csleeps']: csleeps, // sleeps
  ['cSleeps']: cSleeps, // Sleeps
  ['csleeped']: csleeped, // sleeped
  ['cSleeped']: cSleeped, // Sleeped
  ['csleeping']: csleeping, // sleeping
  ['cSleeping']: cSleeping, // Sleeping
  ['cleaf']: cleaf, // leaf
  ['cLeaf']: cLeaf, // Leaf
  ['centry']: centry, // entry
  ['cEntry']: cEntry, // Entry
  ['centries']: centries, // entries
  ['cEntries']: cEntries, // Entries
  ['centity']: centity, // entity
  ['cEntity']: cEntity, // Entity
  ['cmay']: cmay, // may
  ['cMay']: cMay, // May
  ['conly']: conly, // only
  ['cOnly']: cOnly, // Only
  ['csuch']: csuch, // such
  ['cSuch']: cSuch, // Such
  ['cgeneration']: cgeneration, // generation
  ['cGeneration']: cGeneration, // Generation
  ['cDemocratic']: cDemocratic, // Democratic
  ['cRepublic']: cRepublic, // Republic
  ['cCentral']: cCentral, // Central
  ['cAfrican']: cAfrican, // African
  ['cPapua']: cPapua, // Papua
  ['cTrinidad']: cTrinidad, // Trinidad
  ['cTabago']: cTabago, // Tabago
  ['cUnited']: cUnited, // United
  ['cArab']: cArab, // Arab
  ['cEmirates']: cEmirates, // Emirates
  ['cStates']: cStates, // States
  ['cAmerica']: cAmerica, // America
  ['cliver']: cliver, // liver
  ['cLiver']: cLiver, // Liver
  ['ccountry']: ccountry, // country
  ['cCountry']: cCountry, // Country
  ['ccountries']: ccountries, // countries
  ['cCountries']: cCountries, // Countries
  ['cknot']: cknot, // knot
  ['cKnot']: cKnot, // Knot
  ['cknots']: cknots, // knots
  ['cKnots']: cKnots, // Knots
  ['clanguage']: clanguage, // language
  ['cLanguage']: cLanguage, // Language
  ['clanguages']: clanguages, // languages
  ['cLanguages']: cLanguages, // Languages
  ['csole']: csole, // sole
  ['cSole']: cSole, // Sole
  ['cconsole']: cconsole, // console
  ['cConsole']: cConsole, // Console
  ['cboss']: cboss, // boss
  ['cBoss']: cBoss, // Boss
  ['cpanic']: cpanic, // panic
  ['cPanic']: cPanic, // Panic
  ['cslow']: cslow, // slow
  ['cSlow']: cSlow, // Slow
  ['cgot']: cgot, // got
  ['cGot']: cGot, // Got
  ['cmiss']: cmiss, // miss
  ['cMiss']: cMiss, // Miss
  ['cecho']: cecho, // echo
  ['cEcho']: cEcho, // Echo
  ['cincrement']: cincrement, // increment
  ['cIncrement']: cIncrement, // Increment
  ['cincrements']: cincrements, // increments
  ['cIncrements']: cIncrements, // Increments
  ['cincremented']: cincremented, // incremented
  ['cIncremented']: cIncremented, // Incremented
  ['cincrementing']: cincrementing, // incrementing
  ['cIncrementing']: cIncrementing, // Incrementing
  ['cforce']: cforce, // force
  ['cForce']: cForce, // Force
  ['cforced']: cforced, // forced
  ['cForced']: cForced, // Forced
  ['cforcing']: cforcing, // forcing
  ['cForcing']: cForcing, // Forcing
  ['cforces']: cforces, // forces
  ['cForces']: cForces, // Forces
  ['cexecutrix']: cexecutrix, // executrix
  ['cExecutrix']: cExecutrix, // Executrix
  ['cAbsolute']: cAbsolute, // Absolute
  ['cAcid']: cAcid, // Acid
  ['cAir']: cAir, // Air
  ['cSuperiority']: cSuperiority, // Superiority
  ['cAlabaster']: cAlabaster, // Alabaster
  ['cAlice']: cAlice, // Alice
  ['cAlloy']: cAlloy, // Alloy
  ['cAmaranth']: cAmaranth, // Amaranth
  ['cAndroid']: cAndroid, // Android
  ['cAntique']: cAntique, // Antique
  ['cBrass']: cBrass, // Brass
  ['cBronze']: cBronze, // Bronze
  ['cApple']: cApple, // Apple
  ['cApricot']: cApricot, // Apricot
  ['cArctic']: cArctic, // Arctic
  ['cArmy']: cArmy, // Army
  ['cArylide']: cArylide, // Arylide
  ['cAtomic']: cAtomic, // Atomic
  ['cBaby']: cBaby, // Baby
  ['cEyes']: cEyes, // Eyes
  ['cPowder']: cPowder, // Powder
  ['cBaker']: cBaker, // Baker
  ['cMiller']: cMiller, // Miller
  ['cBanana']: cBanana, // Banana
  ['cMania']: cMania, // Mania
  ['cBarbie']: cBarbie, // Barbie
  ['cBarn']: cBarn, // Barn
  ['cBattleship']: cBattleship, // Battleship
  ['cBeau']: cBeau, // Beau
  ['cDazzled']: cDazzled, // Dazzled
  ['cBitter']: cBitter, // Bitter
  ['csweet']: csweet, // sweet
  ['cSweet']: cSweet, // Sweet
  ['cBittersweet']: cBittersweet, // Bittersweet
  ['cShimmer']: cShimmer, // Shimmer
  ['cBean']: cBean, // Bean
  ['cChocolate']: cChocolate, // Chocolate
  ['cShadows']: cShadows, // Shadows
  ['cBlanched']: cBlanched, // Blanched
  ['cBlast']: cBlast, // Blast
  ['cBlizzard']: cBlizzard, // Blizzard
  ['cBlood']: cBlood, // Blood
  ['cCrayola']: cCrayola, // Crayola
  ['cMunsell']: cMunsell, // Munsell
  ['cPantone']: cPantone, // Pantone
  ['cPigment']: cPigment, // Pigment
  ['cBell']: cBell, // Bell
  ['cwheel']: cwheel, // wheel
  ['cWheel']: cWheel, // Wheel
  ['cwheels']: cwheels, // wheels
  ['cWheels']: cWheels, // Wheels
  ['cJeans']: cJeans, // Jeans
  ['cYonder']: cYonder, // Yonder
  ['cBottle']: cBottle, // Bottle
  ['cbrick']: cbrick, // brick
  ['cBrick']: cBrick, // Brick
  ['cbricks']: cbricks, // bricks
  ['cBricks']: cBricks, // Bricks
  ['cBright']: cBright, // Bright
  ['cBrilliant']: cBrilliant, // Brilliant
  ['cRacing']: cRacing, // Racing
  ['cSugar']: cSugar, // Sugar
  ['cBrunswick']: cBrunswick, // Brunswick
  ['cBud']: cBud, // Bud
  ['cBurly']: cBurly, // Burly
  ['cBurnished']: cBurnished, // Burnished
  ['cBurnt']: cBurnt, // Burnt
  ['cCadet']: cCadet, // Cadet
  ['cCafe']: cCafe, // Cafe
  ['cCambridge']: cCambridge, // Cambridge
  ['cCameo']: cCameo, // Cameo
  ['cCaput']: cCaput, // Caput
  ['cMortuum']: cMortuum, // Mortuum
  ['cCaribbean']: cCaribbean, // Caribbean
  ['cCarnation']: cCarnation, // Carnation
  ['cCarrot']: cCarrot, // Carrot
  ['cCastleton']: cCastleton, // Castleton
  ['cCedar']: cCedar, // Cedar
  ['cChest']: cChest, // Chest
  ['cCeladon']: cCeladon, // Celadon
  ['cCeltic']: cCeltic, // Celtic
  ['cCharleston']: cCharleston, // Charleston
  ['cCharm']: cCharm, // Charm
  ['cChartreuse']: cChartreuse, // Chartreuse
  ['cCherry']: cCherry, // Cherry
  ['cBlossom']: cBlossom, // Blossom
  ['cChestnut']: cChestnut, // Chestnut
  ['cChrome']: cChrome, // Chrome
  ['cCinnamon']: cCinnamon, // Cinnamon
  ['cCocoa']: cCocoa, // Cocoa
  ['cCoffee']: cCoffee, // Coffee
  ['cColumbia']: cColumbia, // Columbia
  ['cCool']: cCool, // Cool
  ['cflower']: cflower, // flower
  ['cFlower']: cFlower, // Flower
  ['cflowers']: cflowers, // flowers
  ['cFlowers']: cFlowers, // Flowers
  ['csilk']: csilk, // silk
  ['cSilk']: cSilk, // Silk
  ['cCosmic']: cCosmic, // Cosmic
  ['cLatte']: cLatte, // Latte
  ['cCoyote']: cCoyote, // Coyote
  ['cCotton']: cCotton, // Cotton
  ['cCyber']: cCyber, // Cyber
  ['cDark']: cDark, // Dark
  ['cByzantium']: cByzantium, // Byzantium
  ['cElectric']: cElectric, // Electric
  ['cKhaki']: cKhaki, // Khaki
  ['cHorse']: cHorse, // Horse
  ['cHorses']: cHorses, // Horses
  ['cMoss']: cMoss, // Moss
  ['cPastel']: cPastel, // Pastel
  ['cSky']: cSky, // Sky
  ['cSlate']: cSlate, // Slate
  ['cSpring']: cSpring, // Spring
  ['cDartmouth']: cDartmouth, // Dartmouth
  ['cDavys']: cDavys, // Davys
  ['cCerise']: cCerise, // Cerise
  ['cSparkle']: cSparkle, // Sparkle
  ['cDim']: cDim, // Dim
  ['cDodger']: cDodger, // Dodger
  ['cDogwood']: cDogwood, // Dogwood
  ['cDuke']: cDuke, // Duke
  ['cDutch']: cDutch, // Dutch
  ['cEarth']: cEarth, // Earth
  ['cEerie']: cEerie, // Eerie
  ['cEton']: cEton, // Eton
  ['cFalu']: cFalu, // Falu
  ['cFashion']: cFashion, // Fashion
  ['cFern']: cFern, // Fern
  ['cFiery']: cFiery, // Fiery
  ['cFire']: cFire, // Fire
  ['cEngine']: cEngine, // Engine
  ['cFloral']: cFloral, // Floral
  ['cFluorescent']: cFluorescent, // Fluorescent
  ['cForest']: cForest, // Forest
  ['cFrost']: cFrost, // Frost
  ['cbite']: cbite, // bite
  ['cFuzzy']: cFuzzy, // Fuzzy
  ['cWuzzy']: cWuzzy, // Wuzzy
  ['cGhost']: cGhost, // Ghost
  ['cGlossy']: cGlossy, // Glossy
  ['cMetal']: cMetal, // Metal
  ['cMetallic']: cMetallic, // Metallic
  ['cFusion']: cFusion, // Fusion
  ['cPoppy']: cPoppy, // Poppy
  ['cGranite']: cGranite, // Granite
  ['cGranny']: cGranny, // Granny
  ['cSmith']: cSmith, // Smith
  ['cLizard']: cLizard, // Lizard
  ['cGun']: cGun, // Gun
  ['cHarvest']: cHarvest, // Harvest
  ['cHeat']: cHeat, // Heat
  ['cWave']: cWave, // Wave
  ['cHollywood']: cHollywood, // Hollywood
  ['cHoney']: cHoney, // Honey
  ['cdew']: cdew, // dew
  ['cHonolulu']: cHonolulu, // Honolulu
  ['cHookers']: cHookers, // Hookers
  ['cHot']: cHot, // Hot
  ['cHunter']: cHunter, // Hunter
  ['cIce']: cIce, // Ice
  ['cIlluminating']: cIlluminating, // Illuminating
  ['cImperial']: cImperial, // Imperial
  ['cworm']: cworm, // worm
  ['cIndependence']: cIndependence, // Independence
  ['cIndian']: cIndian, // Indian
  ['cDye']: cDye, // Dye
  ['cnational']: cnational, // national
  ['cNational']: cNational, // National
  ['cnationals']: cnationals, // nationals
  ['cNationals']: cNationals, // Nationals
  ['cInternational']: cInternational, // International
  ['cAerospace']: cAerospace, // Aerospace
  ['cEngineering']: cEngineering, // Engineering
  ['cBridge']: cBridge, // Bridge
  ['cCarmine']: cCarmine, // Carmine
  ['cjazz']: cjazz, // jazz
  ['cJazz']: cJazz, // Jazz
  ['cberry']: cberry, // berry
  ['cBerry']: cBerry, // Berry
  ['cjam']: cjam, // jam
  ['cJam']: cJam, // Jam
  ['cKelly']: cKelly, // Kelly
  ['cKombu']: cKombu, // Kombu
  ['cLanguid']: cLanguid, // Languid
  ['cLapis']: cLapis, // Lapis
  ['cLazuli']: cLazuli, // Lazuli
  ['cLaser']: cLaser, // Laser
  ['cLaurel']: cLaurel, // Laurel
  ['cLawn']: cLawn, // Lawn
  ['cCurry']: cCurry, // Curry
  ['cGlacier']: cGlacier, // Glacier
  ['cMeringue']: cMeringue, // Meringue
  ['cLight']: cLight, // Light
  ['cCoral']: cCoral, // Coral
  ['cSteel']: cSteel, // Steel
  ['cLuster']: cLuster, // Luster
  ['cLincoln']: cLincoln, // Lincoln
  ['cLiseran']: cLiseran, // Liseran
  ['cLittle']: cLittle, // Little
  ['cBoy']: cBoy, // Boy
  ['cDogs']: cDogs, // Dogs
  ['cOrgan']: cOrgan, // Organ
  ['cMacaroni']: cMacaroni, // Macaroni
  ['cCheese']: cCheese, // Cheese
  ['cMadder']: cMadder, // Madder
  ['cHaze']: cHaze, // Haze
  ['cMagic']: cMagic, // Magic
  ['cMajorelle']: cMajorelle, // Majorelle
  ['cminimum']: cminimum, // minimum
  ['cMinimum']: cMinimum, // Minimum
  ['cminimums']: cminimums, // minimums
  ['cMinimums']: cMinimums, // Minimums
  ['cmaximum']: cmaximum, // maximum
  ['cMaximum']: cMaximum, // Maximum
  ['cmaximums']: cmaximums, // maximums
  ['cMaximums']: cMaximums, // Maximums
  ['cMaya']: cMaya, // Maya
  ['cMedium']: cMedium, // Medium
  ['cMellow']: cMellow, // Mellow
  ['cweed']: cweed, // weed
  ['cWeed']: cWeed, // Weed
  ['cweeds']: cweeds, // weeds
  ['cWeeds']: cWeeds, // Weeds
  ['cweeded']: cweeded, // weeded
  ['cWeeded']: cWeeded, // Weeded
  ['cSeaweed']: cSeaweed, // Seaweed
  ['csun']: csun, // sun
  ['cSun']: cSun, // Sun
  ['csuns']: csuns, // suns
  ['cSuns']: cSuns, // Suns
  ['cSunburst']: cSunburst, // Sunburst
  ['cMexican']: cMexican, // Mexican
  ['cMiddle']: cMiddle, // Middle
  ['cMikado']: cMikado, // Mikado
  ['cMimi']: cMimi, // Mimi
  ['cMinion']: cMinion, // Minion
  ['cMisty']: cMisty, // Misty
  ['cMorning']: cMorning, // Morning
  ['cMeadow']: cMeadow, // Meadow
  ['cMount']: cMount, // Mount
  ['cbatten']: cbatten, // batten
  ['cMulberry']: cMulberry, // Mulberry
  ['cMyrtle']: cMyrtle, // Myrtle
  ['cNadeshiko']: cNadeshiko, // Nadeshiko
  ['cNaples']: cNaples, // Naples
  ['cNavajo']: cNavajo, // Navajo
  ['cNavy']: cNavy, // Navy
  ['cNeon']: cNeon, // Neon
  ['cYork']: cYork, // York
  ['cPhoto']: cPhoto, // Photo
  ['cOcean']: cOcean, // Ocean
  ['cLace']: cLace, // Lace
  ['cOpera']: cOpera, // Opera
  ['cPeel']: cPeel, // Peel
  ['cSoda']: cSoda, // Soda
  ['cOuter']: cOuter, // Outer
  ['cOutrageous']: cOutrageous, // Outrageous
  ['cOxford']: cOxford, // Oxford
  ['cPacific']: cPacific, // Pacific
  ['cPalatinate']: cPalatinate, // Palatinate
  ['cPale']: cPale, // Pale
  ['cPansy']: cPansy, // Pansy
  ['cPaolo']: cPaolo, // Paolo
  ['cVeronese']: cVeronese, // Veronese
  ['cPapaya']: cPapaya, // Papaya
  ['cWhip']: cWhip, // Whip
  ['cParadise']: cParadise, // Paradise
  ['cParis']: cParis, // Paris
  ['cPaynes']: cPaynes, // Paynes
  ['cPuff']: cPuff, // Puff
  ['cPearly']: cPearly, // Pearly
  ['cPermanent']: cPermanent, // Permanent
  ['cGeranium']: cGeranium, // Geranium
  ['cLake']: cLake, // Lake
  ['cPersian']: cPersian, // Persian
  ['cPewter']: cPewter, // Pewter
  ['cPhthalo']: cPhthalo, // Phthalo
  ['cPicotee']: cPicotee, // Picotee
  ['cPictorial']: cPictorial, // Pictorial
  ['cPiggy']: cPiggy, // Piggy
  ['cPine']: cPine, // Pine
  ['cTree']: cTree, // Tree
  ['cFlamingo']: cFlamingo, // Flamingo
  ['cSherbet']: cSherbet, // Sherbet
  ['cPlump']: cPlump, // Plump
  ['cpolish']: cpolish, // polish
  ['cPolish']: cPolish, // Polish
  ['cpolished']: cpolished, // polished
  ['cPolished']: cPolished, // Polished
  ['cPomp']: cPomp, // Pomp
  ['cPower']: cPower, // Power
  ['cPortland']: cPortland, // Portland
  ['cPrinceton']: cPrinceton, // Princeton
  ['cPrussian']: cPrussian, // Prussian
  ['cPsychedelic']: cPsychedelic, // Psychedelic
  ['cPullman']: cPullman, // Pullman
  ['cMountain']: cMountain, // Mountain
  ['cMajesty']: cMajesty, // Majesty
  ['cPizzazz']: cPizzazz, // Pizzazz
  ['cQueen']: cQueen, // Queen
  ['cQuick']: cQuick, // Quick
  ['cQuinacridone']: cQuinacridone, // Quinacridone
  ['cRadical']: cRadical, // Radical
  ['cRaisin']: cRaisin, // Raisin
  ['cGlace']: cGlace, // Glace
  ['cRazzle']: cRazzle, // Razzle
  ['cDazzle']: cDazzle, // Dazzle
  ['cRazzmic']: cRazzmic, // Razzmic
  ['cRebecca']: cRebecca, // Rebecca
  ['cSalsa']: cSalsa, // Salsa
  ['cResolution']: cResolution, // Resolution
  ['cRich']: cRich, // Rich
  ['cRifle']: cRifle, // Rifle
  ['cRobin']: cRobin, // Robin
  ['cEgg']: cEgg, // Egg
  ['cRocket']: cRocket, // Rocket
  ['cRoman']: cRoman, // Roman
  ['cBonbon']: cBonbon, // Bonbon
  ['cDust']: cDust, // Dust
  ['cEbony']: cEbony, // Ebony
  ['cQuartz']: cQuartz, // Quartz
  ['cVale']: cVale, // Vale
  ['cwood']: cwood, // wood
  ['cRosso']: cRosso, // Rosso
  ['cCorsa']: cCorsa, // Corsa
  ['cRosy']: cRosy, // Rosy
  ['cRoyal']: cRoyal, // Royal
  ['crub']: crub, // rub
  ['cRub']: cRub, // Rub
  ['crubs']: crubs, // rubs
  ['cRubs']: cRubs, // Rubs
  ['crubbed']: crubbed, // rubbed
  ['cRubbed']: cRubbed, // Rubbed
  ['crubbing']: crubbing, // rubbing
  ['cRubbing']: cRubbing, // Rubbing
  ['cRubine']: cRubine, // Rubine
  ['cSacramento']: cSacramento, // Sacramento
  ['cState']: cState, // State
  ['cSaddle']: cSaddle, // Saddle
  ['cSafety']: cSafety, // Safety
  ['cBlaze']: cBlaze, // Blaze
  ['cPatricks']: cPatricks, // Patricks
  ['cSandy']: cSandy, // Sandy
  ['csap']: csap, // sap
  ['cSap']: cSap, // Sap
  ['cSatin']: cSatin, // Satin
  ['cSheen']: cSheen, // Sheen
  ['cSchauss']: cSchauss, // Schauss
  ['cSchool']: cSchool, // School
  ['cBus']: cBus, // Bus
  ['cScreamin']: cScreamin, // Screamin
  ['cSeal']: cSeal, // Seal
  ['cshell']: cshell, // shell
  ['cSelective']: cSelective, // Selective
  ['cShamrock']: cShamrock, // Shamrock
  ['cShimmering']: cShimmering, // Shimmering
  ['cBlush']: cBlush, // Blush
  ['cShiny']: cShiny, // Shiny
  ['cShocking']: cShocking, // Shocking
  ['cChalice']: cChalice, // Chalice
  ['cSizzling']: cSizzling, // Sizzling
  ['cSunrise']: cSunrise, // Sunrise
  ['cSlimy']: cSlimy, // Slimy
  ['cSmoky']: cSmoky, // Smoky
  ['cSonic']: cSonic, // Sonic
  ['cBistre']: cBistre, // Bistre
  ['cStar']: cStar, // Star
  ['cStil']: cStil, // Stil
  ['cGrain']: cGrain, // Grain
  ['cglow']: cglow, // glow
  ['cSuper']: cSuper, // Super
  ['cTango']: cTango, // Tango
  ['cTart']: cTart, // Tart
  ['cTea']: cTea, // Tea
  ['cTerra']: cTerra, // Terra
  ['cCotta']: cCotta, // Cotta
  ['cThulian']: cThulian, // Thulian
  ['cTickle']: cTickle, // Tickle
  ['cTiffany']: cTiffany, // Tiffany
  ['cTimber']: cTimber, // Timber
  ['cwolf']: cwolf, // wolf
  ['cTropical']: cTropical, // Tropical
  ['cRain']: cRain, // Rain
  ['cTrypan']: cTrypan, // Trypan
  ['cTufts']: cTufts, // Tufts
  ['cTumble']: cTumble, // Tumble
  ['cTwilight']: cTwilight, // Twilight
  ['cTyrian']: cTyrian, // Tyrian
  ['cUltra']: cUltra, // Ultra
  ['cUnbleached']: cUnbleached, // Unbleached
  ['cNations']: cNations, // Nations
  ['cUpsdell']: cUpsdell, // Upsdell
  ['cUranian']: cUranian, // Uranian
  ['cvan']: cvan, // van
  ['cVan']: cVan, // Van
  ['cDyke']: cDyke, // Dyke
  ['cVegas']: cVegas, // Vegas
  ['cVenetian']: cVenetian, // Venetian
  ['cVivid']: cVivid, // Vivid
  ['cWarm']: cWarm, // Warm
  ['cWild']: cWild, // Wild
  ['cWindsor']: cWindsor, // Windsor
  ['cDregs']: cDregs, // Dregs
  ['cWinter']: cWinter, // Winter
  ['cDream']: cDream // Dream
  ['cYale']: cYale, // Yale
};
