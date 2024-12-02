import { lazy, memo , useState } from "react"
import { Squircle } from "corner-smoothing"
const ConditionalMenu = lazy(()=>import("@/components/shared/ConditionalMenu"))
const Actions = memo(function Actions() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className="fixed bottom-0 z-40 w-full md:w-fit p-[4%] md:hidden l">
      <Squircle cornerRadius={16} className="flex justify-between p-[8%] bg-[#d4d4d420] backdrop-blur rtl:flex-row-reverse  text-white">    
        <a href="mailto:makinfilm@gmail.com">
          <svg className="text-[25px]" width="1em" height="1em" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4.24219V15.6002C24.0001 16.5184 23.6492 17.402 23.0193 18.0701C22.3893 18.7382 21.5279 19.1403 20.6112 19.1942L20.4 19.2002H3.6C2.68175 19.2002 1.79818 18.8494 1.13009 18.2194C0.461992 17.5895 0.059871 16.7281 0.00600014 15.8114L0 15.6002V4.24219L11.334 11.7986L11.4732 11.8778C11.6372 11.9579 11.8174 11.9996 12 11.9996C12.1826 11.9996 12.3628 11.9579 12.5268 11.8778L12.666 11.7986L24 4.24219Z" fill="white"/>
            <path d="M20.4007 0C21.6967 0 22.8331 0.684 23.4667 1.7124L12.0007 9.3564L0.534668 1.7124C0.835619 1.22379 1.24902 0.8142 1.74039 0.517787C2.23177 0.221374 2.78689 0.0467247 3.35947 0.00839996L3.60067 0H20.4007Z" fill="white"/>
          </svg>
        </a>
        <div>
          <svg className="text-[25px]" width="1em" height="1em" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0764 14.7726L5.9661 11.9854C5.47556 12.4723 4.85184 12.8031 4.17357 12.9361C3.4953 13.069 2.79285 12.9982 2.15478 12.7325C1.5167 12.4668 0.971567 12.0182 0.5881 11.4431C0.204633 10.8681 0 10.1924 0 9.50122C0 8.81004 0.204633 8.13433 0.5881 7.55928C0.971567 6.98423 1.5167 6.53559 2.15478 6.26991C2.79285 6.00423 3.4953 5.9334 4.17357 6.06636C4.85184 6.19933 5.47556 6.53013 5.9661 7.01705L11.0764 4.22987C10.9012 3.40756 11.0278 2.54963 11.433 1.81297C11.8383 1.07632 12.4953 0.510163 13.2837 0.218046C14.0721 -0.0740706 14.9393 -0.0726318 15.7267 0.2221C16.5142 0.516831 17.1692 1.08516 17.5721 1.82315C17.9749 2.56115 18.0987 3.4195 17.9207 4.24123C17.7427 5.06296 17.2748 5.79316 16.6027 6.29831C15.9306 6.80345 15.0991 7.04978 14.2603 6.99225C13.4214 6.93472 12.6314 6.57717 12.0345 5.98499L6.92416 8.77217C7.02638 9.25249 7.02638 9.74894 6.92416 10.2293L12.0345 13.0174C12.6314 12.4253 13.4214 12.0677 14.2603 12.0102C15.0991 11.9526 15.9306 12.199 16.6027 12.7041C17.2748 13.2093 17.7427 13.9395 17.9207 14.7612C18.0987 15.5829 17.9749 16.4413 17.5721 17.1793C17.1692 17.9173 16.5142 18.4856 15.7267 18.7803C14.9393 19.0751 14.0721 19.0765 13.2837 18.7844C12.4953 18.4923 11.8383 17.9261 11.433 17.1895C11.0278 16.4528 10.9012 15.5949 11.0764 14.7726Z" fill="white"/>
          </svg>
        </div>
        <a href="tel:+966533899206" >
          <svg className="text-[25px]" width="1em" height="1em" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6282 21.9998C16.6695 21.9998 15.3227 21.6531 13.3059 20.5266C10.8535 19.1516 8.95661 17.8821 6.51745 15.4498C4.16572 13.1 3.02129 11.5787 1.41958 8.6646C-0.389902 5.37439 -0.0814462 3.64972 0.263356 2.91261C0.673976 2.03162 1.28008 1.5047 2.0635 0.981699C2.50848 0.690213 2.97937 0.440344 3.47022 0.235261C3.51933 0.214145 3.56501 0.194011 3.60578 0.175841C3.84891 0.0663309 4.21729 -0.0991622 4.6839 0.0776257C4.99531 0.194502 5.27331 0.433657 5.70849 0.863349C6.60095 1.74336 7.82053 3.70325 8.27044 4.66576C8.57251 5.31447 8.77242 5.74269 8.77291 6.22297C8.77291 6.78525 8.48999 7.21887 8.14666 7.68687C8.08232 7.77477 8.01847 7.85875 7.95658 7.94026C7.5828 8.43134 7.50077 8.57326 7.5548 8.82666C7.66433 9.33591 8.48115 10.8519 9.82353 12.191C11.1659 13.5302 12.6384 14.2953 13.1497 14.4043C13.414 14.4608 13.5589 14.3753 14.0658 13.9884C14.1385 13.9329 14.2131 13.8754 14.2912 13.818C14.8148 13.4285 15.2284 13.1531 15.7775 13.1531H15.7805C16.2584 13.1531 16.6675 13.3603 17.3453 13.7021C18.2294 14.148 20.2486 15.3516 21.1342 16.2449C21.565 16.679 21.8052 16.956 21.9226 17.2668C22.0994 17.7348 21.9329 18.1016 21.8243 18.3472C21.8062 18.3879 21.786 18.4326 21.7649 18.4822C21.5581 18.9721 21.3068 19.4419 21.0139 19.8857C20.4918 20.6665 19.9628 21.271 19.0797 21.6821C18.6262 21.8966 18.1299 22.0052 17.6282 21.9998Z" fill="white"/>
          </svg>
        </a>
        <a href="https://wa.me/+966533899206">
          <svg className="text-[25px]" width="1em" height="1em" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9475 0C9.36112 0 7.3507 9.93072e-08 5.78567 0.16661C4.20279 0.336552 2.94921 0.688654 1.94902 1.48394C0.922047 2.30144 0.442046 3.36441 0.215442 4.70506C-4.99016e-08 5.98463 0 7.61296 0 9.64338V9.84664C0 11.826 4.99016e-08 13.1955 0.223256 14.2163C0.343814 14.7661 0.533581 15.2437 0.831628 15.6858C1.12633 16.1212 1.5014 16.4877 1.94902 16.8431C2.6534 17.4041 3.48391 17.7428 4.46512 17.9539V20.8262C4.46525 20.9722 4.50391 21.1155 4.57724 21.2419C4.65057 21.3683 4.75598 21.4734 4.88293 21.5465C5.00988 21.6196 5.1539 21.6582 5.30058 21.6585C5.44726 21.6588 5.59145 21.6208 5.7187 21.5482C6.37284 21.1761 6.95219 20.7707 7.48242 20.3886L7.82177 20.1431C8.19935 19.8619 8.585 19.5915 8.97823 19.3323C9.92037 18.7236 10.8201 18.3271 12 18.3271H12.0525C14.6389 18.3271 16.6493 18.3271 18.2143 18.1605C19.7972 17.9905 21.0508 17.6384 22.051 16.8431C22.4975 16.4877 22.8737 16.1212 23.1673 15.6858C23.4664 15.2437 23.6562 14.7661 23.7767 14.2163C24 13.1955 24 11.826 24 9.84664V9.64338C24 7.61296 24 5.98463 23.7846 4.70617C23.558 3.36441 23.078 2.30144 22.051 1.48394C21.0508 0.687543 19.7972 0.336552 18.2143 0.167721C16.6493 3.31024e-08 14.6389 0 12.0525 0H11.9475Z" fill="white"/>
          </svg>
        </a>
        <div onClick={()=>setIsOpenMenu((prev)=>!prev)}>
          <svg className="text-[25px]" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6ZM4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18ZM11 11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H11Z" fill="white"/>
          </svg>
        </div>
      </Squircle>
      <ConditionalMenu condition={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </div>
  )
})

export default Actions