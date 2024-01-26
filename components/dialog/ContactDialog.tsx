'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ContactDialog = () => {
  return (
      <Dialog>
          <DialogTrigger asChild>
              <div className="w-40 h-10 justify-center items-center inline-flex">
                  <div className="px-8 py-2.5 bg-gradient rounded-3xl justify-center items-center gap-2.5 inline-flex">
                      <div className="text-dark-secondary hover:text-light-primary text-lg font-semibold"></div>
                  </div>
              </div>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px] ">
              <DialogHeader>
                  <DialogTitle className="text-3xl">Get in touch</DialogTitle>
                  <DialogDescription>
                      Got a question about us? Are you interested in partnering with us? Have some ideas and want to know what we can do for you? Just contact us. We are here to assist you.
                  </DialogDescription>
                  <div>
                      <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                              <path d="M9.02744 4.09988C8.88643 3.77531 8.64312 3.49707 8.32886 3.30104C8.0146 3.105 7.6438 3.00015 7.26425 3H4.65082C4.17337 3 3.71547 3.17469 3.37786 3.48565C3.04025 3.79661 2.85059 4.21836 2.85059 4.65813C2.85059 12.4404 9.70003 18.75 18.1502 18.75C18.6277 18.75 19.0856 18.5753 19.4232 18.2643C19.7608 17.9534 19.9504 17.5316 19.9504 17.0919V14.6848C19.9505 14.335 19.8367 13.9933 19.6239 13.7037C19.411 13.414 19.1088 13.1898 18.7563 13.0599L16.2521 12.1376C15.9341 12.0204 15.5877 11.9846 15.2493 12.0338C14.911 12.0831 14.5935 12.2157 14.3303 12.4176L13.6843 12.9146C13.3199 13.1944 12.8551 13.3385 12.3812 13.3188C11.9073 13.299 11.4586 13.1168 11.1231 12.8079L9.30293 11.1288C8.96772 10.8201 8.76989 10.4071 8.74827 9.97099C8.72665 9.53486 8.88281 9.10703 9.18608 8.7715L9.72473 8.1765C9.94441 7.93417 10.0888 7.64161 10.1427 7.32983C10.1965 7.01805 10.1578 6.69866 10.0306 6.4055L9.02744 4.09988Z" className="dark:stroke-light-gray stroke-dark-gray" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <a href="tel:+31610840281">+31 6 10840281</a>
                      </div>
                      <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                              <path d="M18.0493 3.875H4.74939C3.99353 3.875 3.26863 4.15156 2.73415 4.64384C2.19968 5.13613 1.89941 5.80381 1.89941 6.5V15.25C1.89941 15.9462 2.19968 16.6139 2.73415 17.1062C3.26863 17.5984 3.99353 17.875 4.74939 17.875H18.0493C18.8051 17.875 19.53 17.5984 20.0645 17.1062C20.599 16.6139 20.8993 15.9462 20.8993 15.25V6.5C20.8993 5.80381 20.599 5.13613 20.0645 4.64384C19.53 4.15156 18.8051 3.875 18.0493 3.875ZM17.4128 5.625L11.3993 9.78125L5.38589 5.625H17.4128ZM18.0493 16.125H4.74939C4.49744 16.125 4.2558 16.0328 4.07765 15.8687C3.89949 15.7046 3.7994 15.4821 3.7994 15.25V6.71875L10.8293 11.575C10.9938 11.6886 11.1938 11.75 11.3993 11.75C11.6049 11.75 11.8049 11.6886 11.9693 11.575L18.9993 6.71875V15.25C18.9993 15.4821 18.8992 15.7046 18.721 15.8687C18.5429 16.0328 18.3012 16.125 18.0493 16.125Z" className="dark:fill-light-gray fill-dark-gray" />
                          </svg>
                          <a href="mailto:sodecx@gmail.com">sodecx@gmail.com</a>
                      </div>
                  </div>
              </DialogHeader>
          </DialogContent>
      </Dialog>
  )
}

export default ContactDialog