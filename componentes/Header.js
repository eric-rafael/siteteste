import Menu from "./Menu";

const Header = props => (
  <div>
    <img src="images/button_inte.png" className="img" />
    <Menu />
    {props.content}
    <style jsx>{`
      div { 
        display: flex;
        justify-content: space-around;
      }
      .img {
        height: 40px; 
      }
    `}</style>
  </div>
);
export default Header;