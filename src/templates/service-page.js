import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import {Container, Col, Row} from 'react-bootstrap'

export const ServicePageTemplate = ({
    image,
    title,
    caption,
    heading,
    services,
    serviceone,
    servicetwo,
    servicethree,
    servicefour,
    servicefive,
    servicesix,
    serviceseven,
    serviceeight,
    servicenine,
    serviceten,
    serviceeleven,
}) => (
    <div className="content">
        <div
            className="full-width-image-container margin-top-0"
            style={{
                backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`,
            }}>
            <div 
                style={{
                    display: 'flex',
                    height: '150px',
                    lineHeight: '1',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                    style={{
                        //boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                        //backgroundColor: '#E3217C',
                        color: 'pink',
                        padding: '1rem',
                        //fontSize: '5rem',
                    }}
                >
                    {title}
                </h1>
                <h4
                    className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen text-center"
                    style={{
                        color: 'white',
                        lineHeight: '1',
                        padding: '0.25em',
                    }}
                >
                    {caption}
                </h4>
            </div>               
        </div>
        <div>
                <Container>
                    <h2>{heading}</h2>
                    <Row className="justify-content-center">
                        <Col xs={6} md="auto"><a href="#firstService">{services.item1}</a></Col>
                        <Col xs={6} md="auto"><a href="#secondService">{services.item2}</a></Col>
                        <Col xs={6} md="auto"><a href="#thirdService">{services.item3}</a></Col>
                        <Col xs={6} md="auto"><a href="#fourthService">{services.item4}</a></Col>
                        <Col xs={6} md="auto"><a href="#fifthService">{services.item5}</a></Col>
                        <Col xs={6} md="auto"><a href="#sixthService">{services.item6}</a></Col>
                        <Col xs={6} md="auto"><a href="#seventhService">{services.item7}</a></Col>
                        <Col xs={6} md="auto"><a href="#eighthService">{services.item8}</a></Col>
                        <Col xs={6} md="auto"><a href="#ninthService">{services.item9}</a></Col>
                        <Col xs={6} md="auto"><a href="#tenthService">{services.item10}</a></Col>
                        <Col xs={12} md="auto"><a href="#eleventhService">{services.item11}</a></Col>
                    </Row>
                </Container>
                <Container className="content-padding">
                    <Row id='firstService' className="justify-content-center adjustment-padding">
                        <h1>{serviceone.title}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}  className="my-auto">
                            <PreviewCompatibleImage imageInfo={serviceone.image1} />
                        </Col>
                        <Col xs={12} md={9}>
                            <Row style={{paddingTop: '15px'}}>
                                <Col>
                                    <h5>{serviceone.type1}</h5>
                                    <p>{serviceone.text1}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="auto" md="auto">
                                <h5>Price:</h5>
                                </Col>
                                <Col xs="auto" md="auto">
                                    <p>Female: {serviceone.price1.female}</p>
                                </Col> 
                                <Col xs="auto" md="auto">
                                    <p>Male: {serviceone.price1.male}</p>
                                </Col> 
                            </Row><br/>
                            <Row>
                                <Col>
                                    <h5>{serviceone.type2}</h5>
                                    <p>{serviceone.text2}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="auto" md="auto">
                                <h5>Price:</h5>
                                </Col>
                                <Col xs="auto" md="auto">
                                    <p>Female: {serviceone.price2.female}</p>
                                </Col> 
                                <Col xs="auto" md="auto">
                                    <p>Male: {serviceone.price2.male}</p>
                                </Col> 
                            </Row>                
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                        <h4>{serviceone.extra.name}</h4>
                    </Row>
                    <Row>        
                        <Col xs={6} md={2}>{serviceone.extra.add1}</Col><Col xs={6} md={2}>{serviceone.extra.price1}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add2}</Col><Col xs={6} md={2}>{serviceone.extra.price2}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add3}</Col><Col xs={6} md={2}>{serviceone.extra.price3}</Col>        
                    </Row>
                    <Row>        
                        <Col xs={6} md={2}>{serviceone.extra.add4}</Col><Col xs={6} md={2}>{serviceone.extra.price4}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add10}</Col><Col xs={6} md={2}>{serviceone.extra.price10}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add6}</Col><Col xs={6} md={2}>{serviceone.extra.price6}</Col>        
                    </Row>
                    <Row>        
                        <Col xs={6} md={2}>{serviceone.extra.add5}</Col ><Col xs={6} md={2}>{serviceone.extra.price5}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add8}</Col><Col xs={6} md={2}>{serviceone.extra.price8_1}<br/>{serviceone.extra.price8_2}</Col>
                        <Col xs={6} md={2}>{serviceone.extra.add9}</Col><Col xs={6} md={2}>{serviceone.extra.price9_1}<br/>{serviceone.extra.price9_2}</Col>        
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>{serviceone.extra.add7}</Col><Col xs={6} md={2}>{serviceone.extra.price7}</Col>
                    </Row>        
                </Container>
                <Container fluid className="themeColor content-padding fontColor">
                    <Container>
                        <Row id='secondService' className="justify-content-center adjustment-padding" >
                            <h1>{servicetwo.title}</h1>
                        </Row>
                        <Row>
                            <Col xs={{span: 12, order: 1}} md={{span: 3, order: 12}} className="my-auto">
                                <PreviewCompatibleImage imageInfo={servicetwo.image1} />
                            </Col>
                            <Col xs={{span: 12, order: 12}} md={{span: 9, order: 1}}>
                                <br/>
                                <h5>{servicetwo.type1}</h5>
                                <p>{servicetwo.text1}</p>
                                <Row>
                                    <Col xs="auto" md="auto">
                                        <h5>Price:</h5>
                                    </Col>
                                    <Col xs={4} md="auto">
                                        <p>Female: {servicetwo.price1.female}</p>
                                    </Col> 
                                    <Col xs={4} md="auto">
                                        <p>Male: {servicetwo.price1.male}</p>
                                    </Col> 
                                </Row><br/>
                                <Row>
                                    <Col>
                                        <h5>{servicetwo.type2}</h5>
                                        <p>{servicetwo.text2}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="auto" md="auto">
                                        <h5>Price:</h5>
                                    </Col>
                                    <Col xs={4} md="auto">
                                        <p>Female: {servicetwo.price2.female}</p>
                                    </Col> 
                                    <Col xs={4} md="auto">
                                        <p>Male: {servicetwo.price2.male}</p>
                                    </Col> 
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                        <Row className="justify-content-center">
                            <h4>{servicetwo.extra.name}</h4>
                        </Row>
                        <Row>        
                            <Col xs={6} md={2}>{servicetwo.extra.add1}</Col><Col xs={6} md={2}>{servicetwo.extra.price1}</Col>
                            <Col xs={6} md={2}>{servicetwo.extra.add2}</Col><Col xs={6} md={2}>{servicetwo.extra.price2}</Col>
                            <Col xs={6} md={2}>{servicetwo.extra.add3}</Col><Col xs={6} md={2}>{servicetwo.extra.price3}</Col>        
                        </Row>
                        <Row>        
                            <Col xs={6} md={2}>{servicetwo.extra.add4}</Col><Col xs={6} md={2}>{servicetwo.extra.price4}</Col>
                            <Col xs={6} md={2}>{servicetwo.extra.add10}</Col><Col xs={6} md={2}>{servicetwo.extra.price10}</Col>
                            <Col xs={6} md={2}>{servicetwo.extra.add6}</Col><Col xs={6} md={2}>{servicetwo.extra.price6}</Col>        
                        </Row>
                        <Row>        
                            <Col xs={6} md={2}>{servicetwo.extra.add5}</Col ><Col xs={6} md={2}>{servicetwo.extra.price5}</Col>
                            <Col xs={6} md={2}>{servicetwo.extra.add8}</Col><Col xs={6} md={2}>{servicetwo.extra.price8_1}<br/>{servicetwo.extra.price8_2}</Col>
                            <Col xs={6} md={2}>{servicetwo.extra.add9}</Col><Col xs={6} md={2}>{servicetwo.extra.price9_1}<br/>{servicetwo.extra.price9_2}</Col>        
                        </Row>
                        <Row>
                            <Col xs={6} md={2}>{servicetwo.extra.add7}</Col><Col xs={6} md={2}>{servicetwo.extra.price7}</Col>
                        </Row>  
                    </Container>
                </Container>
                <Container className="content-padding">
                    <Row id='thirdService' className="justify-content-center adjustment-padding" >
                        <h1>{servicethree.title}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3} className="my-auto">
                            <PreviewCompatibleImage imageInfo={servicethree.image1} />
                        </Col>
                        <Col xs={12} md={5}>
                            <Row style={{paddingTop: '15px'}}>
                                <Col>
                                    <h5>{servicethree.type1}</h5>
                                    <p>{servicethree.text1}</p>
                                    <Row>
                                        <Col xs={6} md={5}>{servicethree.list1.item1}</Col><Col xs={6} md={5}>{servicethree.list1.price1}</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={5}>{servicethree.list1.item2}</Col><Col xs={6} md={5}>{servicethree.list1.price2}</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={5}>{servicethree.list1.item3}</Col><Col xs={6} md={5}>{servicethree.list1.price3}</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={5}>{servicethree.list1.item4}</Col><Col xs={6} md={5}>{servicethree.list1.price4}</Col>
                                    </Row>
                                </Col>
                            </Row>             
                        </Col>
                        <Col xs={12} md={4}>
                            <Row style={{paddingTop: '15px'}}>
                                <Col>
                                    <h5>{servicethree.type2}</h5>
                                    <p>{servicethree.text2}</p>
                                    <Row>
                                        <Col xs={6} md={5}>{servicethree.list2.item1}</Col><Col xs={6} md={5}>{servicethree.list2.price1}</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={5}>{servicethree.list2.item2}</Col><Col xs={6} md={5}>{servicethree.list2.price2}</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={5}>{servicethree.list2.item3}</Col><Col xs={6} md={5}>{servicethree.list2.price3}</Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} md={5}>{servicethree.list2.item4}</Col><Col xs={6} md={5}>{servicethree.list2.price4}</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="justify-content-center">
                        <h4>{servicethree.extra.name}</h4>
                    </Row>
                    <Row>        
                        <Col xs={6} md={2}>{servicethree.extra.add1}</Col><Col xs={6} md={2}>{servicethree.extra.price1}</Col>
                        <Col xs={6} md={2}>{servicethree.extra.add2}</Col><Col xs={6} md={2}>{servicethree.extra.price2}</Col>
                        <Col xs={6} md={2}>{servicethree.extra.add3}</Col><Col xs={6} md={2}>{servicethree.extra.price3}</Col>        
                    </Row>
                    <Row>        
                        <Col xs={6} md={2}>{servicethree.extra.add4}</Col><Col xs={6} md={2}>{servicethree.extra.price4}</Col>
                        <Col xs={6} md={2}>{servicethree.extra.add10}</Col><Col xs={6} md={2}>{servicethree.extra.price10}</Col>
                        <Col xs={6} md={2}>{servicethree.extra.add6}</Col><Col xs={6} md={2}>{servicethree.extra.price6}</Col>        
                    </Row>
                    <Row>        
                        <Col xs={6} md={2}>{servicethree.extra.add5}</Col ><Col xs={6} md={2}>{servicethree.extra.price5}</Col>
                        <Col xs={6} md={2}>{servicethree.extra.add8}</Col><Col xs={6} md={2}>{servicethree.extra.price8_1}<br/>{servicetwo.extra.price8_2}</Col>
                        <Col xs={6} md={2}>{servicethree.extra.add9}</Col><Col xs={6} md={2}>{servicethree.extra.price9_1}<br/>{servicetwo.extra.price9_2}</Col>        
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>{servicethree.extra.add7}</Col><Col xs={6} md={2}>{servicethree.extra.price7}</Col>
                    </Row>
                </Container>
                <Container fluid className="themeColor content-padding fontColor">
                    <Container>
                        <Row id='fourthService' className="justify-content-center adjustment-padding" >
                            <h1>{servicefour.title}</h1>
                        </Row>
                        <Row>
                            <Col xs={{span: 12, order: 1}} md={{span: 3, order: 12}} className="my-auto">
                                <PreviewCompatibleImage imageInfo={servicefour.image1} />
                            </Col>
                            <Col xs={{span: 12, order: 12}} md={{span: 9, order: 1}}>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list1.item1}</Col><Col xs={6} md={3}>{servicefour.list1.price1}</Col>
                                    <Col xs={6} md={3}>{servicefour.list1.item2}</Col><Col xs={6} md={3}>{servicefour.list1.price2}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list1.item5}</Col><Col xs={6} md={3}>{servicefour.list1.price5}</Col>
                                    <Col xs={6} md={3}>{servicefour.list1.item6}</Col><Col xs={6} md={3}>{servicefour.list1.price6}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list1.item7}</Col><Col xs={6} md={3}>{servicefour.list1.price7}</Col>
                                    <Col xs={6} md={3}>{servicefour.list1.item8}</Col><Col xs={6} md={3}>{servicefour.list1.price8}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list1.item9}</Col><Col xs={6} md={3}>{servicefour.list1.price9}</Col>
                                    <Col xs={6} md={3}>{servicefour.list1.item10}</Col><Col xs={6} md={3}>{servicefour.list1.price10}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list1.item12}</Col><Col xs={6} md={3}>{servicefour.list1.price12}</Col>
                                    <Col xs={6} md={3}>{servicefour.list1.item13}</Col><Col xs={6} md={3}>{servicefour.list1.price13}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list1.item14}</Col><Col xs={6} md={3}>{servicefour.list1.price14}</Col>
                                    <Col xs={6} md={3}>{servicefour.list1.item15}</Col><Col xs={6} md={3}>{servicefour.list1.price15}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list1.item17}</Col><Col xs={6} md={3}>{servicefour.list1.price17}</Col>
                                    <Col xs={6} md={3}>{servicefour.list1.item18}</Col><Col xs={6} md={3}>{servicefour.list1.price18}</Col>                                    
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list1.item11}</Col><Col xs={6} md={3}>{servicefour.list1.price11}</Col>
                                    <Col xs={6} md={3}>{servicefour.list1.item16}</Col><Col xs={6} md={3}>{servicefour.list1.price16}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list1.item3}</Col><Col xs={6} md={3}>{servicefour.list1.price3}</Col>
                                    <Col xs={6} md={3}>{servicefour.list1.item4}</Col><Col xs={6} md={3}>{servicefour.list1.price4}</Col>
                                </Row>
                                <br/><p>*{servicefour.text}</p>
                                <h5>{servicefour.type}</h5>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list2.item1}</Col><Col xs={6} md={3}>{servicefour.list2.price1}</Col>
                                    <Col xs={6} md={3}>{servicefour.list2.item2}</Col><Col xs={6} md={3}>{servicefour.list2.price2}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list2.item3}</Col><Col xs={6} md={3}>{servicefour.list2.price3}</Col>
                                    <Col xs={6} md={3}>{servicefour.list2.item4}</Col><Col xs={6} md={3}>{servicefour.list2.price4}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list2.item5}</Col><Col xs={6} md={3}>{servicefour.list2.price5}</Col>
                                    <Col xs={6} md={3}>{servicefour.list2.item6}</Col><Col xs={6} md={3}>{servicefour.list2.price6}</Col>
                                </Row>
                                <Row>
                                    <Col xs={6} md={3}>{servicefour.list2.item7}</Col><Col xs={6} md={3}>{servicefour.list2.price7}</Col>
                                    <Col xs={6} md={3}>{servicefour.list2.item8}</Col><Col xs={6} md={3}>{servicefour.list2.price8}</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container className="content-padding">
                    <Row id='fifthService' className="justify-content-center adjustment-padding" >
                        <h1>{servicefive.title}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3} className="my-auto">
                            <PreviewCompatibleImage imageInfo={servicefive.image1} />
                        </Col>
                        <Col xs={12} md={9}>
                            <Row>
                                <Col>{servicefive.list.item1}</Col><Col>{servicefive.list.price1}</Col>
                                <Col>{servicefive.list.item2}</Col><Col>{servicefive.list.price2}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item3}</Col><Col>{servicefive.list.price3}</Col>
                                <Col>{servicefive.list.item4}</Col><Col>{servicefive.list.price4}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item5}</Col><Col>{servicefive.list.price5}</Col>
                                <Col>{servicefive.list.item6}</Col><Col>{servicefive.list.price6}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item7}</Col><Col>{servicefive.list.price7}</Col>
                                <Col>{servicefive.list.item8}</Col><Col>{servicefive.list.price8}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item9}</Col><Col>{servicefive.list.price9}</Col>
                                <Col>{servicefive.list.item10}</Col><Col>{servicefive.list.price10}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item11}</Col><Col>{servicefive.list.price11}</Col>
                                <Col>{servicefive.list.item12}</Col><Col>{servicefive.list.price12}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item13}</Col><Col>{servicefive.list.price13}</Col>
                                <Col>{servicefive.list.item14}</Col><Col>{servicefive.list.price14}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item15}</Col><Col>{servicefive.list.price15}</Col>
                                <Col>{servicefive.list.item17}</Col><Col>{servicefive.list.price17}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item18}</Col><Col>{servicefive.list.price18}</Col>
                                <Col>{servicefive.list.item20}</Col><Col>{servicefive.list.price20}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item21}</Col><Col>{servicefive.list.price21}</Col>
                                <Col>{servicefive.list.item22}</Col><Col>{servicefive.list.price22}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item16}</Col><Col>{servicefive.list.price16}</Col>
                                <Col>{servicefive.list.item19}</Col><Col>{servicefive.list.price19}</Col>
                            </Row>
                            <Row>
                                <Col>{servicefive.list.item23}</Col><Col>{servicefive.list.price23}</Col>
                                <Col></Col><Col></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="themeColor content-padding fontColor">
                    <Container>
                        <Row id='sixthService' className="justify-content-center adjustment-padding" >
                            <h1>{servicesix.title}</h1>
                        </Row>
                        <Row>
                            <Col xs={{span: 12, order: 1}} md={{span: 3, order: 12}} className="my-auto">
                                <PreviewCompatibleImage imageInfo={servicesix.image1} />
                            </Col>
                            <Col xs={{span: 12, order: 12}} md={{span: 9, order: 1}}> 
                                <Row>
                                    <Col>{servicesix.list.item1}</Col><Col>{servicesix.list.price1}</Col>
                                </Row>
                                <Row>
                                    <Col>{servicesix.list.item2}</Col><Col>{servicesix.list.price2}</Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container className="content-padding">
                    <Row id='seventhService' className="justify-content-center adjustment-padding" >
                        <h1>{serviceseven.title}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3} className="my-auto">
                            <PreviewCompatibleImage imageInfo={serviceseven.image1} />
                        </Col>
                        <Col xs={12} md={9}>
                            <h4>{serviceseven.type1}</h4>
                            <Row>
                                <Col>{serviceseven.list1.item1}</Col><Col>Female: {serviceseven.list1.pricef1}</Col><Col>Male: {serviceseven.list1.pricem1}</Col>
                            </Row>
                            <Row>
                                <Col>{serviceseven.list1.item2}</Col><Col>Female: {serviceseven.list1.pricef2}</Col><Col>Male: {serviceseven.list1.pricem2}</Col>
                            </Row>
                            <Row>
                                <Col>{serviceseven.list1.item3}</Col><Col>Female: {serviceseven.list1.pricef3}</Col><Col>Male: {serviceseven.list1.pricem3}</Col>
                            </Row>
                            <Row>
                                <Col>{serviceseven.list1.item4}</Col><Col>Female: {serviceseven.list1.pricef4}</Col><Col>Male: {serviceseven.list1.pricem4}</Col>
                            </Row>
                            <Row>
                                <Col>{serviceseven.list1.item5}</Col><Col>Female: {serviceseven.list1.pricef5}</Col><Col>Male: {serviceseven.list1.pricem5}</Col>
                            </Row>
                            <h4>{serviceseven.type2}</h4>
                            <Row>
                                <Col>{serviceseven.list2.item1}</Col><Col>Female: {serviceseven.list2.pricef1}</Col><Col>Male: {serviceseven.list2.pricem1}</Col>
                            </Row>
                            <Row>
                                <Col>{serviceseven.list2.item2}</Col><Col>Female: {serviceseven.list2.pricef2}</Col><Col>Male: {serviceseven.list2.pricem2}</Col>
                            </Row>
                            <Row>
                                <Col>{serviceseven.list2.item3}</Col><Col>{serviceseven.list2.price3}</Col>
                            </Row>
                            <Row>
                                <Col>{serviceseven.list2.item4}</Col><Col>{serviceseven.list2.price4}</Col>
                            </Row>
                            <Row>
                                <Col>{serviceseven.list2.item5}</Col><Col>{serviceseven.list2.price5}</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="themeColor content-padding fontColor">
                    <Container>
                        <Row id='eighthService' className="justify-content-center adjustment-padding" >
                            <h1>{serviceeight.title}</h1>
                        </Row>
                        <Row>
                            <Col xs={{span: 12, order: 1}} md={{span: 3, order: 12}} className="my-auto">
                                <PreviewCompatibleImage imageInfo={serviceeight.image1} />
                            </Col>
                            <Col xs={{span: 12, order: 12}} md={{span: 9, order: 1}}> 
                                <Row>
                                    <Col>{serviceeight.type1}-{serviceeight.price1}</Col>
                                </Row>
                                <p>{serviceeight.text1}</p>
                                <Row>
                                    <Col>{serviceeight.type2}-{serviceeight.price2}</Col>
                                </Row>
                                <p>{serviceeight.text2}</p>
                                <Row>
                                    <Col>{serviceeight.type3}-{serviceeight.price3}</Col>
                                </Row>
                                <p>{serviceeight.text3}</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container className="content-padding">
                    <Row id='ninethService' className="justify-content-center adjustment-padding" >
                        <h1>{servicenine.title}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3} className="my-auto">
                            <PreviewCompatibleImage imageInfo={servicenine.image1} />
                        </Col>
                        <Col xs={12} md={9}>
                            <Row>
                                <Col>{servicenine.list.item1}</Col><Col>{servicenine.list.price1}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item2}</Col><Col>{servicenine.list.price2}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item2_1}</Col><Col>{servicenine.list.price2_1}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item2_2}</Col><Col>{servicenine.list.price2_2}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item3}</Col><Col>{servicenine.list.price3}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item4}</Col><Col>{servicenine.list.price4}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item5}</Col><Col>{servicenine.list.price5}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item6}</Col><Col>{servicenine.list.price6}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item7}</Col><Col>{servicenine.list.price7}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item8}</Col><Col>{servicenine.list.price8}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item9}</Col><Col>{servicenine.list.price9_1}</Col><Col>{servicenine.list.price9_2}</Col><Col>{servicenine.list.price9_3}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item10}</Col><Col>{servicenine.list.price10}</Col>
                            </Row>
                            <Row>
                                <Col>{servicenine.list.item11}</Col><Col>{servicenine.list.price11}</Col>
                            </Row>
                            <p>{servicenine.list.text11}</p>
                            <Row>
                                <Col>{servicenine.list.item12}</Col><Col>{servicenine.list.price12}</Col>
                            </Row>
                            <p>{servicenine.text}</p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="themeColor content-padding fontColor">
                    <Container>
                        <Row id='tenthService' className="justify-content-center adjustment-padding" >
                            <h1>{serviceten.title}</h1>
                        </Row>
                        <Row>
                            <Col xs={{span: 12, order: 1}} md={{span: 3, order: 12}} className="my-auto">
                                <PreviewCompatibleImage imageInfo={serviceten.image1} />
                            </Col>
                            <Col xs={{span: 12, order: 12}} md={{span: 9, order: 1}}> 
                                <h3>{serviceten.description}</h3>
                                <Row>
                                    <Col>{serviceten.type1}</Col><Col>{serviceten.price1}</Col>
                                </Row>
                                <p>{serviceten.text1}</p>
                                <Row>
                                    <Col>{serviceten.type2}</Col><Col>{serviceten.price2}</Col>
                                </Row>
                                <p>{serviceten.text2}</p>
                                <Row>
                                    <Col>{serviceten.type3}</Col><Col>{serviceten.price3}</Col>
                                </Row>
                                <p>{serviceten.text3}</p>
                                <Row>
                                    <Col>{serviceten.type4}</Col><Col>{serviceten.price4}</Col>
                                </Row>
                                <p>{serviceten.text4_1}</p>
                                <p>{serviceten.text4_2}</p>
                                <Row>
                                    <Col>{serviceten.type5}</Col><Col>{serviceten.price5}</Col>
                                </Row>
                                <p>{serviceten.text5_1}
                                <br/>{serviceten.text5_2}
                                <br/>{serviceten.text5_3}</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container className="content-padding">
                    <Row id='eleventhService' className="justify-content-center adjustment-padding" >
                        <h1>{serviceeleven.title}</h1>
                    </Row>
                    <Row>
                        <Col xs={12} md={3} className="my-auto">
                            <PreviewCompatibleImage imageInfo={serviceeleven.image1} />
                        </Col>
                        <Col xs={12} md={5}>
                            <Row>
                                <Col>
                                    <h4>{serviceeleven.type1}</h4>
                                    <Row>
                                        <Col>{serviceeleven.list1.item1}</Col><Col>{serviceeleven.list1.price1}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item2}</Col><Col>{serviceeleven.list1.price2}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item3}</Col><Col>{serviceeleven.list1.price3}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item4}</Col><Col>{serviceeleven.list1.price4}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item5}</Col><Col>{serviceeleven.list1.price5}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item6}</Col><Col>{serviceeleven.list1.price6}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item7}</Col><Col>{serviceeleven.list1.price7}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item8}</Col><Col>{serviceeleven.list1.price8}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item9}</Col><Col>{serviceeleven.list1.price9}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item10}</Col><Col>{serviceeleven.list1.price10}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item11}</Col><Col>{serviceeleven.list1.price11}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item12}</Col><Col>{serviceeleven.list1.price12}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list1.item13}</Col><Col>{serviceeleven.list1.price13}</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row>
                                <Col>
                                    <h4>{serviceeleven.type2}</h4>
                                    <Row>
                                        <Col>{serviceeleven.list2.item1}</Col><Col>{serviceeleven.list2.price1}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list2.item2}</Col><Col>{serviceeleven.list2.price2}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list2.item3}</Col><Col>{serviceeleven.list2.price3}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list2.item4}</Col><Col>{serviceeleven.list2.price4}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{serviceeleven.list2.item5}</Col><Col>{serviceeleven.list2.price5}</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
)
ServicePageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    caption: PropTypes.string,
    heading: PropTypes.string,
    services: PropTypes.shape({
        item1: PropTypes.string,
        item2: PropTypes.string,
        item3: PropTypes.string,
        item4: PropTypes.string,
        item5: PropTypes.string,
        item6: PropTypes.string,
        item7: PropTypes.string,
        item8: PropTypes.string,
        item9: PropTypes.string,
        item10: PropTypes.string,
        item11: PropTypes.string,
    }),
    serviceone: PropTypes.shape({
        title: PropTypes.string,
        type1: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text1: PropTypes.string,
        price1: PropTypes.shape({
            female: PropTypes.string,
            male: PropTypes.string,
        }),
        text2: PropTypes.string,
        price2: PropTypes.shape({
            female: PropTypes.string,
            male: PropTypes.string,
        }),
        extra: PropTypes.shape({
            name: PropTypes.string,
            add1: PropTypes.string,
            price1: PropTypes.string,
            add2: PropTypes.string,
            price2: PropTypes.string,
            add3: PropTypes.string,
            price3: PropTypes.string,
            add4: PropTypes.string,
            price4: PropTypes.string,
            add5: PropTypes.string,
            price5: PropTypes.string,
            add6: PropTypes.string,
            price6: PropTypes.string,
            add7: PropTypes.string,
            price7: PropTypes.string,
            add8: PropTypes.string,
            price8_1: PropTypes.string,
            price8_2: PropTypes.string,
            add9: PropTypes.string,
            price9_1: PropTypes.string,
            price9_2: PropTypes.string,
            add10: PropTypes.string,
            price10: PropTypes.string,
        }),
    }),
    servicetwo: PropTypes.shape({
        title: PropTypes.string,
        type1: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        text1: PropTypes.string,
        price1: PropTypes.shape({
            female: PropTypes.string,
            male: PropTypes.string,
        }),
        text2: PropTypes.string,
        price2: PropTypes.shape({
            female: PropTypes.string,
            male: PropTypes.string,
        }),
        extra: PropTypes.shape({
            name: PropTypes.string,
            add1: PropTypes.string,
            price1: PropTypes.string,
            add2: PropTypes.string,
            price2: PropTypes.string,
            add3: PropTypes.string,
            price3: PropTypes.string,
            add4: PropTypes.string,
            price4: PropTypes.string,
            add5: PropTypes.string,
            price5: PropTypes.string,
            add6: PropTypes.string,
            price6: PropTypes.string,
            add7: PropTypes.string,
            price7: PropTypes.string,
            add8: PropTypes.string,
            price8_1: PropTypes.string,
            price8_2: PropTypes.string,
            add9: PropTypes.string,
            price9_1: PropTypes.string,
            price9_2: PropTypes.string,
            add10: PropTypes.string,
            price10: PropTypes.string,
        }),
    }),
    servicethree: PropTypes.shape({
        title: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        type: PropTypes.string,
        text1: PropTypes.string,
        list1: PropTypes.shape({
            item1: PropTypes.string,
            price1: PropTypes.string,
            item2: PropTypes.string,
            price2: PropTypes.string,
            item3: PropTypes.string,
            price3: PropTypes.string,
            item4: PropTypes.string,
            price4: PropTypes.string,
        }),
        type2: PropTypes.string,
        text2: PropTypes.string,
        list2: PropTypes.shape({
            item1: PropTypes.string,
            price1: PropTypes.string,
            item2: PropTypes.string,
            price2: PropTypes.string,
            item3: PropTypes.string,
            price3: PropTypes.string,
            item4: PropTypes.string,
            price4: PropTypes.string,
        }),
        extra: PropTypes.shape({
            name: PropTypes.string,
            add1: PropTypes.string,
            price1: PropTypes.string,
            add2: PropTypes.string,
            price2: PropTypes.string,
            add3: PropTypes.string,
            price3: PropTypes.string,
            add4: PropTypes.string,
            price4: PropTypes.string,
            add5: PropTypes.string,
            price5: PropTypes.string,
            add6: PropTypes.string,
            price6: PropTypes.string,
            add7: PropTypes.string,
            price7: PropTypes.string,
            add8: PropTypes.string,
            price8_1: PropTypes.string,
            price8_2: PropTypes.string,
            add9: PropTypes.string,
            price9_1: PropTypes.string,
            price9_2: PropTypes.string,
            add10: PropTypes.string,
            price10: PropTypes.string,
        }),
        servicefour: PropTypes.shape({
            title: PropTypes.string,
            image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            list1: PropTypes.shape({
                item1: PropTypes.string,
                price1: PropTypes.string,
                item2: PropTypes.string,
                price2: PropTypes.string,
                item3: PropTypes.string,
                price3: PropTypes.string,
                item4: PropTypes.string,
                price4: PropTypes.string,
                item5: PropTypes.string,
                price5: PropTypes.string,
                item6: PropTypes.string,
                price6: PropTypes.string,
                item7: PropTypes.string,
                price7: PropTypes.string,
                item8: PropTypes.string,
                price8: PropTypes.string,
                item9: PropTypes.string,
                price9: PropTypes.string,
                item10: PropTypes.string,
                price10: PropTypes.string,
                item11: PropTypes.string,
                price11: PropTypes.string,
                item12: PropTypes.string,
                price12: PropTypes.string,
                item13: PropTypes.string,
                price13: PropTypes.string,
                item14: PropTypes.string,
                price14: PropTypes.string,
                item15: PropTypes.string,
                price15: PropTypes.string,
                item16: PropTypes.string,
                price16: PropTypes.string,
                item17: PropTypes.string,
                price17: PropTypes.string,
                item18: PropTypes.string,
                price18: PropTypes.string,
            }),
            text: PropTypes.string,
            type: PropTypes.string,
            list2: PropTypes.shape({
                item1: PropTypes.string,
                price1: PropTypes.string,
                item2: PropTypes.string,
                price2: PropTypes.string,
                item3: PropTypes.string,
                price3: PropTypes.string,
                item4: PropTypes.string,
                price4: PropTypes.string,
                item5: PropTypes.string,
                price5: PropTypes.string,
                item6: PropTypes.string,
                price6: PropTypes.string,
                item7: PropTypes.string,
                price7: PropTypes.string,
                item8: PropTypes.string,
                price8: PropTypes.string,
            }),
        }),
        servicefive: PropTypes.shape({
            title: PropTypes.string,
            image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            list: PropTypes.shape({
                item1: PropTypes.string,
                price1: PropTypes.string,
                item2: PropTypes.string,
                price2: PropTypes.string,
                item3: PropTypes.string,
                price3: PropTypes.string,
                item4: PropTypes.string,
                price4: PropTypes.string,
                item5: PropTypes.string,
                price5: PropTypes.string,
                item6: PropTypes.string,
                price6: PropTypes.string,
                item7: PropTypes.string,
                price7: PropTypes.string,
                item8: PropTypes.string,
                price8: PropTypes.string,
                item9: PropTypes.string,
                price9: PropTypes.string,
                item10: PropTypes.string,
                price10: PropTypes.string,
                item11: PropTypes.string,
                price11: PropTypes.string,
                item12: PropTypes.string,
                price12: PropTypes.string,
                item13: PropTypes.string,
                price13: PropTypes.string,
                item14: PropTypes.string,
                price14: PropTypes.string,
                item15: PropTypes.string,
                price15: PropTypes.string,
                item16: PropTypes.string,
                price16: PropTypes.string,
                item17: PropTypes.string,
                price17: PropTypes.string,
                item18: PropTypes.string,
                price18: PropTypes.string,
                item19: PropTypes.string,
                price19: PropTypes.string,
                item20: PropTypes.string,
                price20: PropTypes.string,
                item21: PropTypes.string,
                price21: PropTypes.string,
                item22: PropTypes.string,
                price22: PropTypes.string,
                item23: PropTypes.string,
                price23: PropTypes.string,
            }),
        }),
        servicesix: PropTypes.shape({
            title: PropTypes.string,
            image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            list: PropTypes.shape({
                item1: PropTypes.string,
                price1: PropTypes.string,
                item2: PropTypes.string,
                price2: PropTypes.string,
            }),
        }),
        serviceseven: PropTypes.shape({
            title: PropTypes.string,
            image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            type1: PropTypes.string,
            list1: PropTypes.shape({
                item1: PropTypes.string,
                pricef1: PropTypes.string,
                pricem1: PropTypes.string,
                item2: PropTypes.string,
                pricef2: PropTypes.string,
                pricem2: PropTypes.string,
                item3: PropTypes.string,
                pricef3: PropTypes.string,
                pricem3: PropTypes.string,
                item4: PropTypes.string,
                pricef4: PropTypes.string,
                pricem4: PropTypes.string,
                item5: PropTypes.string,
                pricef5: PropTypes.string,
                pricem5: PropTypes.string,
            }),
            type2: PropTypes.string,
            list2: PropTypes.shape({
                item1: PropTypes.string,
                pricef1: PropTypes.string,
                pricem1: PropTypes.string,
                item2: PropTypes.string,
                pricef2: PropTypes.string,
                pricem2: PropTypes.string,
                item3: PropTypes.string,
                price3: PropTypes.string,
                item4: PropTypes.string,
                price4: PropTypes.string,
                item5: PropTypes.string,
                price5: PropTypes.string,
            }),
        }),
        serviceeight: PropTypes.shape({
            title: PropTypes.string,
            image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            type1: PropTypes.string,
            text1: PropTypes.string,
            price1: PropTypes.string,
            type2: PropTypes.string,
            text2: PropTypes.string,
            price2: PropTypes.string,
            type3: PropTypes.string,
            text3: PropTypes.string,
            price3: PropTypes.string,
        }),
        servicenine: PropTypes.shape({
            title: PropTypes.string,
            image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            list: PropTypes.shape({
                item1: PropTypes.string,
                price1: PropTypes.string,
                item2: PropTypes.string,
                price2: PropTypes.string,
                item2_1: PropTypes.string,
                price2_1: PropTypes.string,
                item2_2: PropTypes.string,
                price2_2: PropTypes.string,
                item3: PropTypes.string,
                price3: PropTypes.string,
                item4: PropTypes.string,
                price4: PropTypes.string,
                item5: PropTypes.string,
                price5: PropTypes.string,
                item6: PropTypes.string,
                price6: PropTypes.string,
                item7: PropTypes.string,
                price7: PropTypes.string,
                item8: PropTypes.string,
                price8: PropTypes.string,
                item9: PropTypes.string,
                price9_1: PropTypes.string,
                price9_2: PropTypes.string,
                price9_3: PropTypes.string,
                item10: PropTypes.string,
                price10: PropTypes.string,
                item11: PropTypes.string,
                text11: PropTypes.string,
                price11: PropTypes.string,
                item12: PropTypes.string,
                price12: PropTypes.string,
            }),
            text: PropTypes.string,
        }),
        serviceten: PropTypes.shape({
            title: PropTypes.string,
            image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            description: PropTypes.string,
            type1: PropTypes.string,
            text1: PropTypes.string,
            price1: PropTypes.string,
            type2: PropTypes.string,
            text2: PropTypes.string,
            price2: PropTypes.string,
            type3: PropTypes.string,
            text3: PropTypes.string,
            price3: PropTypes.string,
            type4: PropTypes.string,
            text4: PropTypes.string,
            text4_1: PropTypes.string,
            text4_2: PropTypes.string,
            price4: PropTypes.string,
            type5: PropTypes.string,
            text5_1: PropTypes.string,
            text5_2: PropTypes.string,
            text5_3: PropTypes.string,
            price5: PropTypes.string,
        }),
        serviceeleven: PropTypes.shape({
            title: PropTypes.string,
            image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            type1: PropTypes.string,
            list1: PropTypes.shape({
                item1: PropTypes.string,
                price1: PropTypes.string,
                item2: PropTypes.string,
                price2: PropTypes.string,
                item3: PropTypes.string,
                price3: PropTypes.string,
                item4: PropTypes.string,
                price4: PropTypes.string,
                item5: PropTypes.string,
                price5: PropTypes.string,
                item6: PropTypes.string,
                price6: PropTypes.string,
                item7: PropTypes.string,
                price7: PropTypes.string,
                item8: PropTypes.string,
                price8: PropTypes.string,
                item9: PropTypes.string,
                price9: PropTypes.string,
                item10: PropTypes.string,
                price10: PropTypes.string,
                item11: PropTypes.string,
                price11: PropTypes.string,
                item12: PropTypes.string,
                price12: PropTypes.string,
                item13: PropTypes.string,
                price13: PropTypes.string,
            }),
            type2: PropTypes.string,
            list2: PropTypes.shape({
                item1: PropTypes.string,
                price1: PropTypes.string,
                item2: PropTypes.string,
                price2: PropTypes.string,
                item3: PropTypes.string,
                price3: PropTypes.string,
                item4: PropTypes.string,
                price4: PropTypes.string,
                item5: PropTypes.string,
                price5: PropTypes.string,
            }),
        }),
    }),
}

const ServicePage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return(
        <Layout>
            <ServicePageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                caption={frontmatter.caption}
                heading={frontmatter.heading}
                services={frontmatter.services}
                serviceone={frontmatter.serviceone}
                servicetwo={frontmatter.servicetwo}
                servicethree={frontmatter.servicethree}
                servicefour={frontmatter.servicefour}
                servicefive={frontmatter.servicefive}
                servicesix={frontmatter.servicesix}
                serviceseven={frontmatter.serviceseven}
                serviceeight={frontmatter.serviceeight}
                servicenine={frontmatter.servicenine}
                serviceten={frontmatter.serviceten}
                serviceeleven={frontmatter.serviceeleven}
            />
        </Layout>
    )
}

ServicePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default ServicePage

export const servicePageQuery = graphql`
    query ServicePage($id: String!){
        markdownRemark(id : {eq: $id}) {
            html
            frontmatter{
                title
                caption
                image{
                    childImageSharp{
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                heading
                services {
                    item1
                    item2
                    item3
                    item4
                    item5
                    item6
                    item7
                    item8
                    item9
                    item10
                    item11
                }
                serviceone {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    type1
                    text1
                    price1 {
                        female
                        male
                    }
                    type2
                    text2
                    price2 {
                        female
                        male
                    }
                    extra {
                        name
                        add1
                        price1
                        add2
                        price2
                        add3
                        price3
                        add4
                        price4
                        add5
                        price5
                        add6
                        price6
                        add7
                        price7
                        add8
                        price8_1
                        price8_2
                        add9
                        price9_1
                        price9_2
                        add10
                        price10
                    }
                }
                servicetwo {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    type1
                    text1
                    price1 {
                        female
                        male
                    }
                    type2
                    text2
                    price2 {
                        female
                        male
                    }
                    extra {
                        name
                        add1
                        price1
                        add2
                        price2
                        add3
                        price3
                        add4
                        price4
                        add5
                        price5
                        add6
                        price6
                        add7
                        price7
                        add8
                        price8_1
                        price8_2
                        add9
                        price9_1
                        price9_2
                        add10
                        price10
                    }
                }
                servicethree {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    type1
                    text1
                    list1 {
                        item1
                        price1
                        item2
                        price2
                        item3
                        price3
                        item4
                        price4
                    }
                    type2
                    text2
                    list2 {
                        item1
                        price1
                        item2
                        price2
                        item3
                        price3
                        item4
                        price4
                    }
                    extra {
                        name
                        add1
                        price1
                        add2
                        price2
                        add3
                        price3
                        add4
                        price4
                        add5
                        price5
                        add6
                        price6
                        add7
                        price7
                        add8
                        price8_1
                        price8_2
                        add9
                        price9_1
                        price9_2
                        add10
                        price10
                    }
                }
                servicefour {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    list1 {
                        item1
                        price1
                        item2
                        price2
                        item3
                        price3
                        item4
                        price4
                        item5
                        price5
                        item6
                        price6
                        item7
                        price7
                        item8
                        price8
                        item9
                        price9
                        item10
                        price10
                        item11
                        price11
                        item12
                        price12
                        item13
                        price13
                        item14
                        price14
                        item15
                        price15
                        item16
                        price16
                        item17
                        price17
                        item18
                        price18
                    }
                    text
                    type
                    list2 {
                        item1
                        price1
                        item2
                        price2
                        item3
                        price3
                        item4
                        price4
                        item5
                        price5
                        item6
                        price6
                        item7
                        price7
                        item8
                        price8
                    }
                }
                servicefive {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    list {
                        item1
                        price1
                        item2
                        price2
                        item3
                        price3
                        item4
                        price4
                        item5
                        price5
                        item6
                        price6
                        item7
                        price7
                        item8
                        price8
                        item9
                        price9
                        item10
                        price10
                        item11
                        price11
                        item12
                        price12
                        item13
                        price13
                        item14
                        price14
                        item15
                        price15
                        item16
                        price16
                        item17
                        price17
                        item18
                        price18
                        item19
                        price19
                        item20
                        price20
                        item21
                        price21
                        item22
                        price22
                        item23
                        price23
                    }
                }
                servicesix {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    list {
                        item1
                        price1
                        item2
                        price2
                    }
                }
                serviceseven {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    type1
                    list1{
                        item1
                        pricef1
                        pricem1
                        item2
                        pricef2
                        pricem2
                        item3
                        pricef3
                        pricem3
                        item4
                        pricef4
                        pricem4
                        item5
                        pricef5
                        pricem5
                    }
                    type2
                    list2{
                        item1
                        pricef1
                        pricem1
                        item2
                        pricef2
                        pricem2
                        item3
                        price3
                        item4
                        price4
                        item5
                        price5
                    }
                }
                serviceeight {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    type1
                    text1
                    price1
                    type2
                    text2
                    price2
                    type3
                    text3
                    price3
                }
                servicenine {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    list {
                        item1
                        price1
                        item2
                        price2
                        item2_1
                        price2_1
                        item2_2
                        price2_2
                        item3
                        price3
                        item4
                        price4
                        item5
                        price5
                        item6
                        price6
                        item7
                        price7
                        item8
                        price8
                        item9
                        price9_1
                        price9_2
                        price9_3
                        item10
                        price10
                        item11
                        text11
                        price11
                        item12
                    }
                    text
                }
                serviceten {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    description
                    type1
                    text1
                    price1
                    type2
                    text2
                    price2
                    type3
                    text3
                    price3
                    type4
                    text4_1
                    text4_2
                    price4
                    type5
                    price5
                    text5_1
                    text5_2
                    text5_3
                }
                serviceeleven {
                    image1 {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    title
                    type1
                    list1{
                        item1
                        price1
                        item2
                        price2
                        item3
                        price3
                        item4
                        price4
                        item5
                        price5
                        item6
                        price6
                        item7
                        price7
                        item8
                        price8
                        item9
                        price9
                        item10
                        price10
                        item11
                        price11
                        item12
                        price12
                        item13
                        price13
                    }
                    type2
                    list2{
                        item1
                        price1
                        item2
                        price2
                        item3
                        price3
                        item4
                        price4
                        item5
                        price5
                    }
                }
            }
        }
    }
`