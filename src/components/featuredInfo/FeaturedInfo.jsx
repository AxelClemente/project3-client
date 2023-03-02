// import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@material-ui/icons"
import User from "../../pages/User"
import "./featuredInfo.css"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <div className="featuredMoneyContainer">
                <User/>
            </div>
            {/* <span className="featuredSub">Compare to last month</span> */}
        </div>



        <div className="featuredItem">
            <div className="featuredMoneyContainer">
                {/* <StrollCreated/> */}
            </div>
            {/* <span className="featuredSub">Compare to last month</span> */}
        </div>

    </div>
  )
}
