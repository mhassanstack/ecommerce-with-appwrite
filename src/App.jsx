import ProductForm from "./components/ProductForm"
import Products from "./pages/Products"

function App() {

  return (
    <>
      <ProductForm></ProductForm>
      <div className="grid grid-cols-5">
        <Products></Products>
      </div>
    </>
  )
}

export default App
