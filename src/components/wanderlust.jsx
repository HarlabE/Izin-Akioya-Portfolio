import React from 'react'
import blog1 from '../img/blog/11.png'
import blog2 from '../img/blog/2.png'

const Wanderlust = () => {
  return (
    <div>
        <section>
				<div className="blog" style={{padding: '10rem 0'}}>
					<div >
						<div className="section-head text-center" >
							<h5 className="tit" style={{marginBottom: "0"}}>Wanderlust</h5>
						</div>
			
								<div className="" style={{wordSpacing: "1px", textAlign: "center", color: '#222222', padding: '3.125rem 5rem' }}>
									<p className="mb-20" style={{color: '#222222', fontSize: '18px'}}>My love for words manifests in questions about humanity, identity and culture. <br/> I've told my mother's story, my story. <br/>
										 My goal is to tell real people stories, in a way that inspires big acts, big change.</p>
								</div>
					</div>
						<div style={{display: 'flex', justifyContent: 'space-between', gap: '10%', paddingBottom: '4rem'}}>
							
							<div classname="" >
								<div classname="img-post" >
									<a href="https://www.amazon.com/-/e/B0B3QPHS25"><img src={blog1} alt="my book" loading='lazy'/></a>
								</div>
							</div>

							<div classname="" >
								<div classname="img-post">
									<a href="https://www.amazon.com/dp/B0B1P3W31H"><img src={blog2} alt="my book" loading='lazy'/></a>
								</div>
								</div>
							</div>

						
						</div>
                
			</section>
    </div>
  )
}

export default Wanderlust