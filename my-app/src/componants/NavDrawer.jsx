import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 


const NavDrawer = () => {
    const [open, setOpen] = React.useState(false);
 
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
   
    return (
      <React.Fragment>
        <Button onClick={openDrawer}>Menu</Button>
        <Drawer open={open} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="forum">
             Herittage Hotels
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Link to={'/'}>
          <Typography color="gray" className="mb-8 pr-4 font-normal">
            Home
          </Typography>
          </Link>
          <Link to={'/rooms/deluxe'}>
          <Typography color="gray" className="mb-8 pr-4 font-normal">
           Deluxe
          </Typography>
          </Link>
          <Link to={'/rooms/grand-royal'}>
          <Typography color="gray" className="mb-8 pr-4 font-normal">
            Grand Royal
          </Typography>
          </Link>
          <Link to={'/rooms/grand-heritage'}>
          <Typography color="gray" className="mb-8 pr-4 font-normal">
            Grand Heritage
          </Typography>
          </Link>
         
        </Drawer>
      </React.Fragment>
  );
}

export default NavDrawer;



// export function DrawerDefault() {

//   );
// }