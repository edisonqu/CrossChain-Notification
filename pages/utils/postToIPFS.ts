
import axios from "axios"


export async function postToIPFS(postData: object) {

    var bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwOTM3YzQxNC1jMjg5LTQ1ZDQtYjYyZS02NWZhZThkMmY3NDUiLCJlbWFpbCI6ImVkaXNvbnF1dUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNTc0NGMxYTU2ZGI5YjE2OWQ5NDEiLCJzY29wZWRLZXlTZWNyZXQiOiJhYThiZWZjYTU4YjcxN2NlMzQzNDE1Y2VlMmEzMjdjYzg3MGI5YzM4YmE1MzNjYWYzYTFmZjk3ZGQ3OWMzNTViIiwiaWF0IjoxNjY3Njc5OTkyfQ.8xCQcFtPXiZ4HwA5Y6GM7YVPf66E9KdYy9NrUKIJeqo"
    var data = JSON.stringify({
        "pinataOptions": {
            "cidVersion": 1
        },
        "pinataMetadata": {
            "name": "testing",
            "keyvalues": {
                "customKey": "customValue",
                "customKey2": "customValue2"
            }
        },
        "pinataContent": postData
    });


    var config = {
        method: 'post',
        url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        headers: {
            "Content-Type": 'application/json',
            Authorization: `Bearer ${bearerToken}`
        },
        data : data
    }
    const res = await axios(config);

    console.log(res.data);
    return res.data
}
