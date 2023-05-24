import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './card.css'
export default function App() {
  var districts =[
    {
        "id":1,
        "title":"Trivandram",
        "descrption":"Thiruvananthapuram is the one of the major district of Kerala State of India. It is the southernmost district of Kerala.Thiruvananthapuram, or Trivandrum, as it was conveniently re-christened by the English, is the southern-most district ",
        "image":"https://trisoj.com/travel-guide/wp-content/uploads/2022/10/Places-to-visit-in-Trivandrum.png" 
    },
    {
        "id":2,
        "title":"Pathanamthitta",
        "descrption":"Pathanamthitta is the youngest and the smallest district of Kerala state India.The name Pathanamthitta is derived from two Malayalam words Pathanam” and “thitta”,which together mean ",
        "image": "https://trip2kerala.com/wp-content/uploads/2021/11/Konni-Pathanamthitta-Eco-Tourisum.jpg"
    },
    {
        "id":3,
        "title":"Kottayam",
        "descrption":"Kottayam is one of the districts of Kerala State of India.It is Bordered by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west, Kottayam has many",
        "image":"https://im.hunt.in/cg/Kottayam/City-Guide/about-kottayam.jpg"
    },
    {
        "id":4,
        "title":"Kollam",
        "descrption":"Kollam is one of the 14 districts of Kerala India.About 30 percent of the district is covered by Ashtamudi Lake making it a gateway to the Kerala backwaters.It is endowed with a long coastline,",
        "image": "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg"
    },
    {
        "id":5,
        "title":"Alappuzha",
        "descrption":"Alappuzha District is one of the district of Kerala State of India which is a widely known tourist destination, and is well known for its coir factories.Alappuzha is also called as Alleppey . Alappuzha is",
        "image": "https://s3.india.com/travel/wp-content/uploads/2017/05/Alleppey.jpg"
    },
    {
        "id":6,
        "title":"Thrissur",
        "descrption":"Thrissur is also called as cultural capital of Kerala India. It is one of the 14 districts of Kerala State. The term Thrissur is the abbreviated anglicized form of the Malayalam word ",
        "image": "https://cdn.britannica.com/79/144379-050-8BC20473/festival-Vadakkumnathan-Temple-Thrissur-India-Kerala.jpg"
    },
    {
        "id":7,
        "title":"Palakkad",
        "descrption":"Palakkad is rightfully known as the Gateway of Kerala, giving the rest of India access to the State. For quite sometime the district was also called by its anglicized name Palghat. It's known to be",
        "image": "https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/cover-Things-To-Do-In-Palakkad.jpg"
    },
    {
        "id":8,
        "title":"Idukki",
        "descrption":"Idukki means a place with a deep gorge. River Periyar flowed through a canyon between two rocky mountains. Kurava and Kurathy. The legend told from generation of the ancient Adivasi Muthuvan tribe here is that",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/72/Idukki009.jpg"
    },
    {
        "id":9,
        "title":"Ernakulam",
        "descrption":"Ernakulam District is situated almost at the middle of Kerala State and on the coast of the Arabian Sea. Ernakulam District is Commercial capital of Kerala as it is the major business hub of Kerala... ",
        "image": "https://townplanning.kerala.gov.in/town/wp-content/uploads/2018/12/ekm.jpg"
    },
    {
        "id":10,
        "title":"Wayanad",
        "descrption":"Wayanad is one of the districts of Kerala state of India which was formed on November 1, 1980 by carving out the areas of Kozhikode and Kannur districts. It was known as Mayakshetra in its.",
        "image": "https://www.keralatourism.org/images/microsites/wayanad/waynadu-1024x768.jpg"
    },
    {
        "id":11,
        "title":"Malappuram",
        "descrption":"Malappuram district is a a district located in State of Kerala India. Malappuram district was formed on 16th June 1969. Malappuram has a rich and glorifying history. Thirunavaya, home of the traditional Ayurveda medicine, Kottakkal...",
        "image": "https://www.keralatourism.org/images/enchanting_kerala/large/thirunavaya_malappuram20230105140626_1260_1.jpg"
    },{
        "id":12,
        "title":"Kozhikode",
        "descrption":"Kozhikode is a district in Kerala State of India. kozhikode city also known as Calicut is the headquarters of this district.Kozhikode district is bordered by the districts of Kannur to the north, Wayanad to the..",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/22/Calicut_Beach.jpg"
    },
    {
        "id":13,
        "title":"Kasaragod",
        "descrption":"Kasargod is the northernmost district of Kerala State of India. It was named after the Kasaragod town located in district. The district is known for its coir and hand loom industries. The district has a.",
        "image": "https://www.weekendthrill.com/wp-content/uploads/2016/07/Kasargod-compressed.jpg"
    },
    {
        "id":14,
        "title":"Kannur",
        "descrption":"Kannur is a one of the 14 districts of Kerala State in India. It is also termed as Cannanore , the town of Kannur is the headquarters of the District Kannur. Kannur District is bounded..",
        "image": "https://www.deccanherald.com/sites/dh/files/article_images/2019/03/26/Fort%20Kannur-1553562002.JPG"
    }
]
  return (
    <div class="bg">
    <Container >
      <h1 style={{color:'WHITE',textAlign:'center',textDecorationLine:'underline'}}><br></br>KERALA DISTRICTS<br></br></h1>
      <Row>
      {
        districts.map ((districts,index) => {
          return (
            <Col sm={3} key={index}>
              <Card className='mt-3' style={{background:'lightblue'}}>
                <Card.Img style={{height:'13rem'}} variant="top" src={districts.image} />
                <Card.Body style={{height:'20rem', width:'18rem'}}>
                  <Card.Title>{districts.title}</Card.Title>
                  <Card.Text style={{height:'9rem'}}>{districts.descrption}</Card.Text>
                  <div className='text-center'>
                    <Button variant="primary" size="lg" className='mt-5'>Go somewhere</Button>
                  </div>
                </Card.Body>
              </Card>
             </Col> 
  )
})
}
</Row>
</Container>
</div>
  );
}