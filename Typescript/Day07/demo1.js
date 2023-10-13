//Array of Object
var arrObj = [
    {
        id: 9,
        fname: 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", "May", "Dec"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 48
            }
        ]
    },
    {
        id: 6,
        fname: 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'US'
        },
        month: ["Feb", "Aug", "Nov"],
        result: [
            {
                subj: "M1",
                marks: 50
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 68
            }
        ]
    },
    {
        id: 3,
        fname: 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ["March", "July", "Oct"],
        result: [
            {
                subj: "M1",
                marks: 60
            },
            {
                subj: "M2",
                marks: 75
            },
            {
                subj: "M3",
                marks: 65
            }
        ]
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n            ID        :: ".concat(arrObj[i].id, "\n            First Name:: ").concat(arrObj[i].fname, "\n            Last Name :: ").concat(arrObj[i].lname, "\n            Country   :: ").concat(arrObj[i].country.cname, "\n            Month     :: ").concat(arrObj[i].month.join(" "), "\n            ----------Result--------------\n    "));
    // for(let j=0;j<arrObj[i].result.length;j++){
    //         console.log(`
    //                 Subject :: ${arrObj[i].result[j].subj}
    //                 marks   :: ${arrObj[i].result[j].marks}
    //         `)
    // }
    arrObj[i].result.forEach(function (item) {
        console.log("\n                Subject :: ".concat(item.subj, "\n                Marks   :: ").concat(item.marks, "\n        "));
    });
}
