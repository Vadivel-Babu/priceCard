
const Card = ({data}) => {
  return (
    <div className="shadow px-5 py-3  bg-light" style={{borderRadius:10}}>
      <h1 className="text-center fs-6 text-muted" >{data.sub}</h1>
      <h1 className="text-center fs-3">${data.price}/month</h1>
      <hr />
      <p>
        <i className="fa-solid fa-check me-1"></i>
        {data.user}
      </p>
      <p>
        <i className="fa-solid fa-check me-1"></i>
        50GB storage
      </p>
      <p>
        <i className="fa-solid fa-check me-1"></i>
        Unlimited Public Projects
      </p>
      <p>
        <i className="fa-solid fa-check me-1"></i>
        Community Access
      </p>
      {data.private ? (
        <p >
        <i className="fa-solid fa-check me-1"></i>
        Unlimited Private Projects
      </p>
      ):(
        <p style={{opacity: .5}}>
        <i className="fa-solid fa-xmark me-1"></i>
        Unlimited Private Projects
        </p>
      )}
      {data.support ? (
        <p>
        <i className="fa-solid fa-check me-1"></i>
        Dedicated Phone Support
      </p>
      ):(
        <p style={{opacity: .5}}>
        <i className="fa-solid fa-xmark me-1"></i>
        Dedicated Phone Support
      </p>
      )}
      
      {data.domain ? (
        <p>
        <i className="fa-solid fa-check me-1"></i>
        Free Subdomain
      </p>
      ):(
        <p style={{opacity: .5}}>
        <i className="fa-solid fa-xmark me-1"></i>
        Free Subdomain
      </p>
      )}
      {data.status ? (<p>
        <i className="fa-solid fa-check me-1"></i>
        Monthly status Reports
      </p> ): (
        <p style={{opacity: .5}}>
          <i className="fa-solid fa-xmark me-1"></i>
          Monthly status Reports
        </p>
      )}
      <button className="btn btn-primary" style={{width:200,borderRadius:20}}>Button</button>
    </div>
  )
}

export default Card