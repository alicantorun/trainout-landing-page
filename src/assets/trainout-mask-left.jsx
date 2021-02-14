import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={478}
      height={1157}
      viewBox="0 0 478 1157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M259.654 173.918C-75.529-119.803-193.726 45.263-201.992 57.843c-.346.527-.469 1.074-.463 1.704l3.93 422.884c1.16 124.819 101.79 227.143 223.614 199.937C163.591 651.436 325.96 580.17 381.937 416.639c53.786-157.133-95.435-219.194-122.283-242.721z"
        fill="#6FCF97"
        opacity={0.05}
      />
      <g opacity={0.91} filter="url(#prefix__filter0_d)">
        <path
          d="M302.324 724.66C181.001 618.367 98.72 594.367 45.956 598.167c-52.728 3.797-76.251 35.379-80.02 40.968-.283.42-.395.862-.39 1.467l1.908 205.181c.693 74.51 32.265 143.953 80.661 187.257 48.367 43.27 113.514 60.43 181.561 30.52 70.079-30.81 134.066-80.895 161.919-162.249 9.793-28.603 10.328-52.822 5.364-73.328-4.965-20.513-15.451-37.375-27.798-51.233-12.35-13.861-26.549-24.699-38.914-33.159-4.845-3.315-9.399-6.258-13.454-8.879-1.121-.725-2.205-1.426-3.246-2.102-4.779-3.107-8.701-5.741-11.223-7.95z"
          stroke="#4F4F4F"
          strokeWidth={2}
        />
      </g>
      <g opacity={0.91} filter="url(#prefix__filter1_d)">
        <path
          d="M282.983 723.908C40.163 511.17-47.168 627.12-54.893 638.576c-.422.626-.567 1.28-.56 2.036l1.907 205.18c1.39 149.545 126.72 278.868 263.625 218.678 70.229-30.87 134.487-81.125 162.462-162.835 39.392-115.057-69.895-160.5-89.558-177.727z"
          fill="#6FCF97"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={-71.42}
          y={560.827}
          width={549.293}
          height={595.581}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={20.435} dy={20.435} />
          <feGaussianBlur stdDeviation={28.201} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="prefix__filter1_d"
          x={-91.42}
          y={560.827}
          width={549.293}
          height={595.581}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={20.435} dy={20.435} />
          <feGaussianBlur stdDeviation={28.201} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
