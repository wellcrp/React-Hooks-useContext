import HeaderComponent from './Modules/Header/Components/HeaderComponent';
import { InitialContext } from './Modules/Initial/initialContext';
import ProductComponent from './Modules/Product/components/ProductComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <InitialContext.Provider value={{productName: "Arroz", categoryName: "Jantar"}}>
        <ProductComponent />
      </InitialContext.Provider>        
    </div>
  );
}

export default App;
