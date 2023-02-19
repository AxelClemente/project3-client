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
            <span className="featuredSub">Compare to last month</span>
        </div>




        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5,21</span>
                <span className="featuredMoneyRate">
                    {/* -14.4 <ArrowDownwardOutlined className="featuredIcon negative"/> */}
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
        </div>

    </div>
  )
}
