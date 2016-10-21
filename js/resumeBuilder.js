//Bio div
var bio = {
    "name": "Junaid Jalal",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "+91-9052645704",
        "email": "junaid.jalal94@gmail.com",
        "github": "JunaidJalal",
        "location": "Hyderabad"
    },
    "welcomeMessage": "Hey there!",
    "skills": ["Problem Solver", "Excellent verbal and written communication skills", "Hardworker", "Team facilitator",],
    "biopic": "images/me.jpg"

};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var pic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWcMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(pic);
    $("#header").append(formattedWcMsg);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);


    }
};


//internationalize button
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);


//Work experience div
var work = {
    "jobs": [{


        "title": "Software Engineer",
        "employer": "Infosys",
        "dates": "2017-",
        "location": "Mysore",
        "description": "Abcasdsadsad ajdsaddjasndnsjlansdnjdjsa;dnsjdnjsladndnandlsandlsnadnsadnal a sjld djlas djsandlkasdlds adlas dldnsajldnlkdnsalkd dlasd asldnakdsak xyz"
    }, {
        "title": "Customer Service Associate",
        "employer": "Amazon",
        "dates": "2012",
        "location": "Hyderabad",
        "description": "adhsadbshdb dbs adj sahdsajkd akdj abd dasjkdbsaljdb sjkd bsadk adabbdasd jkds kksabdsnbdjsabad  bskjdbas daskdj sajkd "
    }]
};
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
};

//Projects div
var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "2015-2016",
        "description": "Responsive images and optimized performance project",
        "images": ["images/pro1.jpg", "images/pro2.jpg"]
    }]

};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        for (var j = 0; j < project.images.length; j++) {
            var formattedImages = HTMLprojectImage.replace("%data%", project.images[j]);
            $(".project-entry:last").append(formattedImages);

        }
    });
}



//Education Div

var education = {
    "schools": [{
        "name": "MJ College of Engineering and Technology",
        "dates": "2012-2016",
        "degree": "Bachelor of Engineering",
        "location": "Hyderabad",
        "majors": ["IT"],
        "url": "www.mjcet.com"
    }, {
        "name": "Sri Chaitanya Junior College",
        "dates": "2010-2012",
        "degree": "Intermediate",
        "location": "Hyderabad",
        "majors": ["MPC"],
        "url": "www.srichaitanya.in"
    }],
    "onlineCourses": [{
        "title": "Front-End Development",
        "dates": "2016",
        "school": "Udacity",
        "url": "www.udacity.com"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDegree = formattedSchoolName + formattedDegree;
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDate);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedURL = HTMLonlineURL.replace("%data%", school.url);
        $(".education-entry:last").append(formattedURL);



    });
    education.onlineCourses.forEach(function(course) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedURL);

    });
};


$("#mapDiv").append(googleMap);




$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


bio.display();
work.display();
projects.display();
education.display();