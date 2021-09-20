import MyButton from "./MyButton"
import MyLoader from "./MyLoader"
import MySpinner from "./MySpinner"


const ComponentExample = () => {
  return(
    <>
    <div>
      <MyLoader />
    </div>
    <div>
      <MySpinner />
    </div>
    <MyButton>Test</MyButton>
    </>
  )

}

export default ComponentExample