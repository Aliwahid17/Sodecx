import { socialMedia } from "@/config"
import Link from "next/link"

const SocialMedia = ({ active }: { active: boolean }) => {
    return (
        <div className="flex flex-col gap-5  w-[211px]  ">
            {active && <svg xmlns="http://www.w3.org/2000/svg" width="211" height="22" viewBox="0 0 211 22" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.543432 18.8439C-0.181144 19.5659 -0.181144 20.7365 0.543432 21.4585C1.26801 22.1805 2.44278 22.1805 3.16735 21.4585L21.5348 3.15613C22.2594 2.43412 22.2594 1.26351 21.5348 0.541506C20.8102 -0.180502 19.6355 -0.180502 18.9109 0.541506L0.543432 18.8439ZM21.5347 18.8439C20.8102 19.5659 20.8102 20.7365 21.5347 21.4585C22.2593 22.1805 23.4341 22.1805 24.1587 21.4585L42.5261 3.15613C43.2507 2.43412 43.2507 1.26351 42.5261 0.541506C41.8015 -0.180502 40.6268 -0.180502 39.9022 0.541506L21.5347 18.8439ZM42.526 21.4585C41.8015 20.7365 41.8015 19.5659 42.526 18.8439L60.8935 0.541506C61.6181 -0.180502 62.7928 -0.180502 63.5174 0.541506C64.242 1.26351 64.242 2.43412 63.5174 3.15613L45.15 21.4585C44.4254 22.1805 43.2506 22.1805 42.526 21.4585ZM63.5173 18.8439C62.7928 19.5659 62.7928 20.7365 63.5173 21.4585C64.2419 22.1805 65.4167 22.1805 66.1413 21.4585L84.5087 3.15613C85.2333 2.43412 85.2333 1.26351 84.5087 0.541506C83.7841 -0.180502 82.6094 -0.180502 81.8848 0.541506L63.5173 18.8439ZM84.5087 21.4585C83.7841 20.7365 83.7841 19.5659 84.5087 18.8439L102.876 0.541506C103.601 -0.180502 104.775 -0.180502 105.5 0.541506C106.225 1.26351 106.225 2.43412 105.5 3.15613L87.1326 21.4585C86.408 22.1805 85.2332 22.1805 84.5087 21.4585ZM105.5 18.8439C104.775 19.5659 104.775 20.7365 105.5 21.4585C106.225 22.1805 107.399 22.1805 108.124 21.4585L126.491 3.15613C127.216 2.43412 127.216 1.26351 126.491 0.541506C125.767 -0.180502 124.592 -0.180502 123.867 0.541506L105.5 18.8439ZM126.491 21.4585C125.767 20.7365 125.767 19.5659 126.491 18.8439L144.859 0.541506C145.583 -0.180502 146.758 -0.180502 147.483 0.541506C148.207 1.26351 148.207 2.43412 147.483 3.15613L129.115 21.4585C128.391 22.1805 127.216 22.1805 126.491 21.4585ZM147.483 18.8439C146.758 19.5659 146.758 20.7365 147.483 21.4585C148.207 22.1805 149.382 22.1805 150.106 21.4585L168.474 3.15613C169.199 2.43412 169.199 1.26351 168.474 0.541506C167.749 -0.180502 166.575 -0.180502 165.85 0.541506L147.483 18.8439ZM168.474 21.4585C167.749 20.7365 167.749 19.5659 168.474 18.8439L186.841 0.541506C187.566 -0.180502 188.741 -0.180502 189.465 0.541506C190.19 1.26351 190.19 2.43412 189.465 3.15613L171.098 21.4585C170.373 22.1805 169.198 22.1805 168.474 21.4585ZM189.465 18.8439C188.741 19.5659 188.741 20.7365 189.465 21.4585C190.19 22.1805 191.365 22.1805 192.089 21.4585L210.457 3.15613C211.181 2.43412 211.181 1.26351 210.457 0.541506C209.732 -0.180502 208.557 -0.180502 207.833 0.541506L189.465 18.8439Z" className='fill-dark-primary dark:fill-light-primary' />
            </svg>}
            <div className="flex justify-between items-center">
                <Link href={socialMedia.tiktok} target="_blank" >
                    <svg className="socialmedia hover:rounded-full" xmlns="http://www.w3.org/2000/svg" width="42" height="41" viewBox="0 0 42 41" fill="none">
                        <path d="M40.7407 20.5C40.7407 31.4046 31.7946 40.2593 20.7407 40.2593C9.68687 40.2593 0.740741 31.4046 0.740741 20.5C0.740741 9.59539 9.68687 0.740741 20.7407 0.740741C31.7946 0.740741 40.7407 9.59539 40.7407 20.5Z" className="stroke-dark-primary dark:stroke-light-primary" strokeWidth="1.48148" />
                        <path d="M25.9559 13.4617C25.1808 12.5729 24.7537 11.4315 24.7541 10.25H21.2507V24.3722C21.2236 25.1364 20.9024 25.8603 20.3547 26.3914C19.807 26.9225 19.0754 27.2193 18.3141 27.2194C16.7042 27.2194 15.3663 25.8983 15.3663 24.2583C15.3663 22.2994 17.2484 20.8303 19.1872 21.4339V17.835C15.2756 17.3111 11.8516 20.3633 11.8516 24.2583C11.8516 28.0508 14.9808 30.75 18.3028 30.75C21.8629 30.75 24.7541 27.8458 24.7541 24.2583V17.0947C26.1747 18.1196 27.8803 18.6694 29.6293 18.6664V15.1472C29.6293 15.1472 27.4978 15.2497 25.9559 13.4617Z" className='fill-dark-primary dark:fill-light-primary' />
                    </svg>
                </Link>
                <Link href={socialMedia.instagram} target="_blank" >
                    <svg className="socialmedia hover:rounded-full" xmlns="http://www.w3.org/2000/svg" width="42" height="41" viewBox="0 0 42 41" fill="none">
                        <path d="M41.0357 20.5C41.0357 31.4046 32.0895 40.2593 21.0357 40.2593C9.98179 40.2593 1.03566 31.4046 1.03566 20.5C1.03566 9.59539 9.98179 0.740741 21.0357 0.740741C32.0895 0.740741 41.0357 9.59539 41.0357 20.5Z" className="stroke-dark-primary dark:stroke-light-primary" strokeWidth="1.48148" />
                        <path d="M22.0258 10.9836C22.7285 10.9809 23.4312 10.9879 24.1336 11.0045L24.3204 11.0112C24.5361 11.0188 24.7489 11.0283 25.006 11.0397C26.0306 11.0873 26.7296 11.2472 27.343 11.4823C27.9785 11.7241 28.5139 12.0515 29.0493 12.5806C29.5388 13.0561 29.9177 13.6313 30.1595 14.2662C30.3974 14.8725 30.5592 15.5644 30.6073 16.577C30.6189 16.8302 30.6285 17.0415 30.6362 17.2547L30.642 17.4393C30.6591 18.1333 30.6665 18.8276 30.6641 19.5218L30.6651 20.2318V21.4786C30.6675 22.1731 30.6601 22.8676 30.6429 23.562L30.6372 23.7466C30.6294 23.9598 30.6198 24.1701 30.6083 24.4243C30.5601 25.4369 30.3964 26.1279 30.1595 26.7342C29.9185 27.3697 29.5395 27.9454 29.0493 28.4207C28.5678 28.9045 27.9856 29.2789 27.343 29.518C26.7296 29.7531 26.0306 29.913 25.006 29.9606C24.7489 29.972 24.5361 29.9815 24.3204 29.9892L24.1336 29.9949C23.4312 30.0118 22.7285 30.0191 22.0258 30.0168L21.3075 30.0177H20.047C19.3444 30.0201 18.6417 30.0128 17.9392 29.9958L17.7524 29.9901C17.5238 29.9819 17.2953 29.9724 17.0668 29.9616C16.0423 29.914 15.3432 29.7522 14.7289 29.518C14.0863 29.2795 13.5043 28.9049 13.0235 28.4207C12.5335 27.9451 12.1542 27.3695 11.9123 26.7342C11.6745 26.1279 11.5127 25.4369 11.4646 24.4243C11.4539 24.1984 11.4442 23.9725 11.4357 23.7466L11.4309 23.562C11.4131 22.8676 11.4051 22.1731 11.4068 21.4786V19.5218C11.4041 18.8276 11.4112 18.1334 11.428 17.4393L11.4347 17.2547C11.4424 17.0415 11.4521 16.8302 11.4636 16.577C11.5118 15.5634 11.6735 14.8734 11.9114 14.2662C12.1534 13.631 12.5334 13.056 13.0245 12.5816C13.5049 12.0969 14.0866 11.7217 14.7289 11.4823C15.3432 11.2472 16.0413 11.0873 17.0668 11.0397L17.7524 11.0112L17.9392 11.0064C18.6414 10.9889 19.3437 10.981 20.0461 10.9826L22.0258 10.9836ZM21.0359 15.7424C20.398 15.7334 19.7647 15.8499 19.1727 16.0851C18.5807 16.3202 18.0419 16.6693 17.5876 17.112C17.1333 17.5547 16.7725 18.0823 16.5263 18.664C16.2801 19.2458 16.1533 19.8701 16.1533 20.5007C16.1533 21.1312 16.2801 21.7556 16.5263 22.3373C16.7725 22.919 17.1333 23.4466 17.5876 23.8893C18.0419 24.332 18.5807 24.6811 19.1727 24.9162C19.7647 25.1514 20.398 25.2679 21.0359 25.2589C22.3128 25.2589 23.5374 24.7576 24.4404 23.8651C25.3433 22.9727 25.8505 21.7623 25.8505 20.5002C25.8505 19.2381 25.3433 18.0277 24.4404 17.1352C23.5374 16.2428 22.3128 15.7424 21.0359 15.7424ZM21.0359 17.6459C21.4197 17.6389 21.801 17.7075 22.1575 17.8478C22.5141 17.9881 22.8388 18.1973 23.1127 18.463C23.3866 18.7287 23.6042 19.0457 23.7527 19.3955C23.9013 19.7453 23.9778 20.1208 23.9779 20.5002C23.978 20.8795 23.9015 21.2551 23.7531 21.6049C23.6047 21.9547 23.3872 22.2718 23.1134 22.5376C22.8396 22.8035 22.515 23.0127 22.1584 23.1531C21.8019 23.2935 21.4206 23.3623 21.0369 23.3554C20.2708 23.3554 19.536 23.0546 18.9943 22.5191C18.4525 21.9837 18.1482 21.2574 18.1482 20.5002C18.1482 19.7429 18.4525 19.0167 18.9943 18.4812C19.536 17.9457 20.2708 17.6449 21.0369 17.6449L21.0359 17.6459ZM26.0912 14.3147C25.7806 14.327 25.4868 14.4576 25.2714 14.6792C25.056 14.9008 24.9357 15.1962 24.9357 15.5035C24.9357 15.8108 25.056 16.1061 25.2714 16.3277C25.4868 16.5493 25.7806 16.6799 26.0912 16.6922C26.4105 16.6922 26.7166 16.5669 26.9423 16.3438C27.1681 16.1206 27.2949 15.818 27.2949 15.5025C27.2949 15.187 27.1681 14.8844 26.9423 14.6613C26.7166 14.4382 26.4105 14.3128 26.0912 14.3128V14.3147Z" className='fill-dark-primary dark:fill-light-primary' />
                    </svg>
                </Link>
                <Link href={socialMedia.facebook} target="_blank" >
                    <svg className="socialmedia hover:rounded-full" xmlns="http://www.w3.org/2000/svg" width="43" height="41" viewBox="0 0 43 41" fill="none">
                        <path d="M41.3345 20.5C41.3345 31.4046 32.3884 40.2593 21.3345 40.2593C10.2806 40.2593 1.33449 31.4046 1.33449 20.5C1.33449 9.59539 10.2806 0.740741 21.3345 0.740741C32.3884 0.740741 41.3345 9.59539 41.3345 20.5Z" className="stroke-dark-primary dark:stroke-light-primary" strokeWidth="1.48148" />
                        <path d="M26.4659 11.1197V14.1398H24.5911C23.9064 14.1398 23.4447 14.2771 23.2059 14.5516C22.967 14.8262 22.8476 15.238 22.8476 15.7871V17.9492H26.3465L25.8808 21.3354H22.8476V30.0181H19.1935V21.3354H16.1484V17.9492H19.1935V15.4554C19.1935 14.0368 19.6075 12.9367 20.4354 12.155C21.2634 11.3733 22.366 10.9824 23.7432 10.9824C24.9135 10.9824 25.8211 11.0282 26.4659 11.1197Z" className='fill-dark-primary dark:fill-light-primary' />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default SocialMedia