import Card from "./Card"
import ShapesDisplayer from "@/app/modules/ShapesDisplayer"

export default function MobileLayout(){
    return(
      <>
        {/* Angolo destro */}
        <div className="md:hidden bg-blue-light h-full col-[1/3] row-[3/45]">
            <ShapesDisplayer 
                numShapes={2} 
                imgName1="/geometric_shapes/dark-8.png" 
                imgName2="/geometric_shapes/medium-5.png"
                flexType="col" position="start" spin={true}
            />
        </div>
        <div className="md:hidden bg-blue-medium h-full col-[28/30] row-[3/45]">
            <ShapesDisplayer 
                numShapes={2} 
                imgName1="/geometric_shapes/dark-8.png" 
                imgName2="/geometric_shapes/light-5.png"
                flexType="col" position="start" spin={true}    
            />
        </div>

        <div className="md:hidden text-[10vw] text-blue-dark col-[8/25] row-[2/7]">
            <h1>About Us</h1>
        </div>

        <div className="md:hidden row-[9] col-[5/27]">
            <Card fileName="test.png" width="100" height="100"   alt="" />
        </div>

        <div className="md:hidden row-[18] col-[5/27]">
            <Card fileName="test.png" width="100" height="100"   alt=""/>
        </div>

        <div className="md:hidden row-[27] col-[5/27]">
            <Card fileName="test.png" width="100" height="100"   alt="" />  
        </div>

        <div className="md:hidden row-[36] col-[5/27]">
            <Card fileName="test.png" width="100" height="100"   alt=""/>
        </div>
    </>
    )
}