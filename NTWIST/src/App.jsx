
import './App.css'
import InfoOne from './Common/InfoOne'
import InfoTwo from './Common/InfoTwo'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>
   
      <Navbar />
      <Header/>

      <InfoOne
        Heading={"Mine-To-Mill-To-Mine Optimization"}

        Details={"NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."}
        Image={"https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg"}
      />



      <InfoTwo
        Heading={"Sustainability"}

        Details={"Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers."}
        Image={"https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"}
      />



      <InfoOne
        Heading={"Mineral Processing"}

        Details={"NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption."}
        Image={"https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"}
      />


     <InfoTwo
        Heading={"Oil & Gas"}

        Details={"NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety."}
        Image={"https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"}
      />



    </>
  )
}

export default App
