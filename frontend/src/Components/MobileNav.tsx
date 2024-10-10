import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";


const MobileNav = () => {  return(
    <Sheet>
        <SheetTrigger>
            <Menu className="text-violet-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                <span> Welcome to UrOrder!</span>
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex">
                <Button className="flex-1 font-bold bg-violet-500">Log In</Button>
            </SheetDescription>

        </SheetContent>
    </Sheet>


  )
}

export default MobileNav;