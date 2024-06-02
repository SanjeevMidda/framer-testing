import "./index.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div className="square" animate={{ x: -200, y: 200 }} />
      <motion.h1 animate={{ rotate: 90 }}>hello.</motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        drag
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nisi
        omnis, vitae reprehenderit inventore est assumenda mollitia doloribus id
        quam esse, dicta deleniti dolorum neque, optio eum. Dignissimos, eius
        est!
      </motion.p>
    </div>
  );
}

export default App;
