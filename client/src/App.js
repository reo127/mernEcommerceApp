import Navber from './components/Navber';
import './input.css';
import Home from './screens/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Product from './screens/Product';
import Catagory from './components/Catagory';
import Footer from './components/Footer';
import CatagoryList from './screens/CatagoryList';
import CheckOut from './screens/CheckOut';
import Search from './screens/Search';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import UserOrders from './screens/UserOrders';
import AddProduct from './screens/AddProduct';
import AdminNavber from './components/AdminNavber';
import EaditProduct from './screens/EaditProduct';
import EaditProductDetails from './screens/EaditProductDetails';
import AdminOrders from './screens/AdminOrders';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Navber /> <Catagory /> <Home /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product/:productId' element={<> <Navber /> <Product /> </>} />
        <Route path='/catagorylist/:catagory' element={<> <Navber /> <CatagoryList /> <Footer /> </>} />
        <Route path='/checkout/:productId' element={<> <Navber /> <CheckOut/> <Footer /> </>} />
        <Route path='/search/:productName' element={<> <Navber /> <Search/> <Footer /> </>} />
        <Route path='/cart' element={<> <Navber /> <Cart/> <Footer /> </>} />
        <Route path='/profile' element={<> <Navber /> <Profile /> <Footer /> </>} />
        <Route path='/orders' element={<> <Navber /> <UserOrders/> <Footer /> </>} />
        <Route path='/admin/addproduct' element={<> <Navber /> <AdminNavber/> <AddProduct/>  </>} />
        <Route path='/admin/eaditproduct' element={<> <Navber /> <AdminNavber/> <EaditProduct/>  </>} />
        <Route path='/admin/eaditproduct/1' element={<> <Navber /> <AdminNavber/> <EaditProductDetails/>  </>} />
        <Route path='/admin/adminorders' element={<> <Navber /> <AdminNavber/> <AdminOrders/>  </>} />
      </Routes>

    </div>
  );
}

export default App;
