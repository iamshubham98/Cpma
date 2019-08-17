var c=0;
var e=0;
var ad=0;
var an=0;
var h=0;
var p=0;
localStorage.C=0;
localStorage.P=0;
localStorage.AD=0;
localStorage.AN=0;
localStorage.H=0;
localStorage.E=0;
function func3()
{
    alert("Let's Begin  the Journey to find the right career path for you!!!")
    window.location.href="Group1.html";
    localStorage.c=0;
    localStorage.p=0;
    localStorage.ad=0;
    localStorage.an=0;
    localStorage.h=0;
    localStorage.e=0;
}

function func1(x)
{
    console.log(localStorage.c);
    if(x==="Train in surf lifesaving at a beach")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Work on generic research in a laboratory")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Write article for a popular website")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Manage a company budget")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Convince local shops to sell your products")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);   
    }
    else if(x==="Care for sick people in hospital")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Help people with enquiries")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);   
    }
    else if(x==="Look after children at a childcare centre")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Pick and sort grapes in a vineyard")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Study weather patterns")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Design and plan workspaces")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Manage paperwork in an office")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Create and test new types of plastic")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Act in a stage play")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Calculate house price")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Coordinate fundraising for a local group")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Provide support to stressed employees")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h); 
    }
    else if(x==="Patrol local waterways in a boat")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Check company records for a legal firm")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Talk with suppliers about stock ideas")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Help people recovering from addiction")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Spray paint cars")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Study soil taken from forests")
    {
       var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Paint and sell your artwork")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Check people's eyes to see if they need glasses")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Check the quality of sporting fields")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Control air traffic at an airport")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Design clothes for a fashion label")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Type up records for a legal firm")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Guide people around tourist attractions")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Design posters and other advertising material")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Check tax returns have been filled in correctly")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Ask people to complete a survey")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Put together a recovery plan for a stroke patient")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Harvest seeds from crops in a field")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Improve voice recognition software")
    {
       var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Keep track of workers use of sick leave")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Come up with ways to stop workspace injuries")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Teach new skills to children with special needs")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Install electrical cables underground")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Create a new vaccine for the flu")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Be the key media spokesperson for a company")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Maintain radio signalling equipment")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Make and sell your own artworks")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Check for errors on insurance claim forms")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Serve passengers on an aeroplane")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Take care of sick or injured animals")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Drill for underground metal deposits")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Interview people who have applied for a job")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Work with violence affected people")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Make clothes for a fashion designer")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Take measurements and plan a new road")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Arrange flowers to display in shop windows")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Manage money for a retirement village")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Direct a movie")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Manage home loans for a bank")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Give advice to customers in a hardware store")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Help families who are new to Australia")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Work on an ocean rig searching for oil")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Write computer programs for a software company")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Track power generation in an electrical plant")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Measure and track deep space signals")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Write a TV script")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Organise books in a library")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Show people around rental properties")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Help elderly people manage their medication")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Write poetry for greeting cards")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Put together folders of training materials")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Bargain with suppliers to get the best price")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Assess young children with learning difficulties")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Train in search and rescue work")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Study insect numbers and the spread of germs")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Tutor students who are struggling at school")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);  
    }
    else if(x==="Round up and shear sheep")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Measure light and temperature levels")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Write and publish restaurant reviews")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Prepare wills and legal papers")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Answer student questions at a career fair")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Measure a block of land before building a shed")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else if(x==="Design a propeller for an aircraft")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Compose music for a movie soundtrack")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Arrange appointments for a politician")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Review customer service standards in hotels")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Work in a police station assisting victims of crime")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);
    }
    else if(x==="Analyse the ripeness and sugar content of grapes")
    {
        var an=Number(localStorage.getItem("an"));
        localStorage.setItem("an",++an);
        console.log(an);
    }
    else if(x==="Host a live radio show")
    {
        var c=Number(localStorage.getItem("c"));
        localStorage.setItem("c",++c);
        console.log(c);
    }
    else if(x==="Manage a busy office")
    {
        var ad=Number(localStorage.getItem("ad"));
        localStorage.setItem("ad",++ad);
        console.log(ad);
    }
    else if(x==="Meet and greet visitors at a hotel")
    {
        var e=Number(localStorage.getItem("e"));
        localStorage.setItem("e",++e);
        console.log(e);
    }
    else if(x==="Help people with brain damage with daily tasks")
    {
        var h=Number(localStorage.getItem("h"));
        localStorage.setItem("h",++h);
        console.log(h);
    }
    else if(x==="Feed and monitor cows and other livestock")
    {
        var p=Number(localStorage.getItem("p"));
        localStorage.setItem("p",++p);
        console.log(p);
    }
    else
    {
        alert("Oops you missed something! At least choose 1 task from the given group.");
    }
}
function func2()
{
    c=localStorage.c;
    an=localStorage.an;
    ad=localStorage.ad;
    e=localStorage.e;
    h=localStorage.h;
    p=localStorage.p;
    console.log(c);
    if(c>=e && c>=ad && c>=an && c>=h && c>=p)
    {
        alert("The type of career you should choose is Creative")
        window.location.href="careeroption1.html";
        localStorage.clear();
    }
    else if(e>=c && e>=ad && e>=an && e>=h && c>=p)
    {
        alert("The type of career you should choose is Enterprising")
        window.location.href="careeroption2.html";
        localStorage.clear();
    }
    else if(ad>=c && ad>=e && ad>=an && ad>=h && ad>=p)
    {
        alert("The type of career you should choose is Administrative")
        window.location.href="careeroption3.html";
        localStorage.clear();
    }
    else if(an>=c && an>=e && an>=ad && an>=h && an>=p)
    {
        alert("The type of career you should choose is Analytic")
        window.location.href="careeroption4.html";
        localStorage.clear();
    }
    else if(h>=c && h>=e && h>=ad && h>=an && h>=p)
    {
        alert("The type of career you should choose is Helping")
        window.location.href="careeroption5.html";
        localStorage.clear();
    }
    else
    {
        alert("The type of career you should choose is Practical")
        window.location.href="careeroption6.html";
        localStorage.clear();
    }
}
 function func4()
{
    window.location.href="https://www.google.com/search?q=creative+jobs&rlz=1C1CHZL_enIN842IN842&oq=creative+jobs&aqs=chrome..69i57j0l5.9228j0j4&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwj-2I2Q297hAhXMdysKHf66CbcQiYsCKAF6BAgJECY#fpstate=tldetail&htidocid=cVi8AfbeELEgyDbCAAAAAA%3D%3D&htivrt=jobs";
}

function func5()
{
    window.location.href="https://foundr.com/how-to-start-a-startup/";
}

function func6()
{
    window.location.href="https://www.google.com/search?q=administrative+jobs&ibp=htl;jobs#fpstate=tldetail&htidocid=r4LlhvbD77Z1ywbGAAAAAA%3D%3D&htivrt=jobs";
}

function func7()
{
    window.location.href="https://www.google.com/search?q=analytic+jobs&ibp=htl;jobs#fpstate=tldetail&htidocid=UKByysUciadrduhfAAAAAA%3D%3D&htivrt=jobs";
}

function func8()
{
    window.location.href="https://www.google.com/search?q=helping+jobs&ibp=htl;jobs#fpstate=tldetail&htidocid=3TjkyD2aERf-2qMVAAAAAA%3D%3D&htivrt=jobs";
}

function func9()
{
    window.location.href="https://www.google.com/search?q=practical+jobs&ibp=htl;jobs#fpstate=tldetail&htidocid=isfnKVojcRWOc8x8AAAAAA%3D%3D&htivrt=jobs";
}

function subform(){
    if($("#first").val()=='' || $("#last").val()==''){alert("First & Last name required");}
    else{
        if($("#e2").val()==''){alert("kindly put your mail id !");}
        else{
            if($("#pass1").val()=='' || $("#pass2").val()==''){alert("Password area required");}
            else{
                if($("#pass1").val()!=$("#pass2").val()){alert("Passwords Does not matched");}
                else{
                    localStorage.setItem("email",$("#e2").val());
                    localStorage.setItem("password",$("#pass1").val());
                    alert("Signed Up Successfully");
                    window.location.href="login.html";
                }
            }
        }
    }
}



function logform(){
    if($("#e1").val()==''){alert("Enter Email id");}
    else{
        if($("#e1").val()==localStorage.getItem("email")){
            if($("#pass").val()==''){alert("Enter Password");}
            else{
                if($("#pass").val()==localStorage.getItem("password")){
                    alert("Signed In Successfully");
                    window.location.href="Slide1.html";
                }
                else{alert("Wrong Password");}
            }
        }
        else{
            alert("Invalid ID");
        }
    }
}