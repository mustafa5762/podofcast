import Link from 'next/link';
import React from 'react'





function Navbar() {
  return (
    <div>
      <div className="h-24 px-24 flex items-center justify-between">
        <div className='flex items-center space-x-24'>
          

        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="74"
      height="74"
      fill="none"
      viewBox="0 0 332 332"
    >
      <g clipPath="url(#clip0_301_11203)">
        <path
          fill="#000"
          d="M143.568 305.081a143.569 143.569 0 11136.54-187.932l-13.654 4.436a129.206 129.206 0 00-102.673-87.691A129.213 129.213 0 0028.44 220.173a129.213 129.213 0 00115.128 70.55v14.357z"
        ></path>
        <path
          fill="#CD4631"
          d="M181.272 146.114c3.894 0 7.265.649 10.113 1.947 2.889 1.298 5.108 3.14 6.657 5.527 1.55 2.387 2.324 5.213 2.324 8.479 0 3.225-.774 6.051-2.324 8.48-1.549 2.387-3.768 4.229-6.657 5.527-2.848 1.256-6.219 1.885-10.113 1.885h-8.856v12.122H162.24v-43.967h19.032zm-.565 23.554c3.056 0 5.38-.649 6.972-1.948 1.591-1.34 2.387-3.224 2.387-5.653 0-2.47-.796-4.354-2.387-5.653-1.592-1.339-3.916-2.009-6.972-2.009h-8.291v15.263h8.291zm46.318 21.167c-4.564 0-8.689-.984-12.374-2.952-3.643-1.968-6.511-4.669-8.605-8.103-2.052-3.475-3.078-7.37-3.078-11.683s1.026-8.186 3.078-11.62c2.094-3.475 4.962-6.197 8.605-8.165 3.685-1.968 7.81-2.952 12.374-2.952 4.564 0 8.668.984 12.311 2.952 3.643 1.968 6.511 4.69 8.605 8.165 2.093 3.434 3.14 7.307 3.14 11.62 0 4.313-1.047 8.208-3.14 11.683-2.094 3.434-4.962 6.135-8.605 8.103-3.643 1.968-7.747 2.952-12.311 2.952zm0-8.668c2.596 0 4.941-.586 7.035-1.759a12.85 12.85 0 004.899-5.025c1.214-2.135 1.821-4.564 1.821-7.286 0-2.722-.607-5.15-1.821-7.286-1.173-2.135-2.806-3.789-4.899-4.962-2.094-1.214-4.439-1.821-7.035-1.821s-4.941.607-7.035 1.821c-2.094 1.173-3.748 2.827-4.962 4.962-1.173 2.136-1.759 4.564-1.759 7.286 0 2.722.586 5.151 1.759 7.286 1.214 2.136 2.868 3.811 4.962 5.025 2.094 1.173 4.439 1.759 7.035 1.759zm29.191-36.053h19.974c4.774 0 8.982.921 12.625 2.763 3.685 1.801 6.532 4.355 8.542 7.663 2.052 3.308 3.078 7.161 3.078 11.557 0 4.397-1.026 8.249-3.078 11.557-2.01 3.309-4.857 5.884-8.542 7.726-3.643 1.801-7.851 2.701-12.625 2.701h-19.974v-43.967zm19.471 35.613c4.397 0 7.894-1.214 10.49-3.643 2.638-2.47 3.957-5.799 3.957-9.987 0-4.187-1.319-7.495-3.957-9.924-2.596-2.47-6.093-3.706-10.49-3.706h-9.296v27.26h9.296z"
        ></path>
        <path
          fill="#000"
          d="M183.533 247.835c-4.564 0-8.689-.984-12.374-2.952-3.643-1.968-6.511-4.669-8.605-8.103-2.051-3.475-3.077-7.37-3.077-11.683s1.026-8.186 3.077-11.62c2.094-3.475 4.962-6.197 8.605-8.165 3.685-1.968 7.81-2.952 12.374-2.952 4.564 0 8.668.984 12.311 2.952 3.643 1.968 6.511 4.69 8.605 8.165 2.094 3.434 3.141 7.307 3.141 11.62 0 4.313-1.047 8.208-3.141 11.683-2.094 3.434-4.962 6.135-8.605 8.103-3.643 1.968-7.747 2.952-12.311 2.952zm0-8.668c2.596 0 4.941-.586 7.035-1.759a12.836 12.836 0 004.899-5.025c1.215-2.135 1.822-4.564 1.822-7.286 0-2.722-.607-5.15-1.822-7.286-1.172-2.135-2.805-3.789-4.899-4.962-2.094-1.214-4.439-1.821-7.035-1.821s-4.941.607-7.035 1.821c-2.093 1.173-3.747 2.827-4.962 4.962-1.172 2.136-1.758 4.564-1.758 7.286 0 2.722.586 5.151 1.758 7.286 1.215 2.136 2.869 3.811 4.962 5.025 2.094 1.173 4.439 1.759 7.035 1.759zm49.668-28.139c-3.518 0-6.177.774-7.977 2.324-1.801 1.507-2.701 3.789-2.701 6.846v2.701h18.09v8.165h-18.09v16.017h-10.175v-26.82c0-5.653 1.758-10.05 5.276-13.19 3.559-3.141 8.521-4.711 14.886-4.711 2.512 0 4.878.272 7.098.816 2.219.503 4.145 1.257 5.778 2.262l-3.14 8.039c-2.513-1.633-5.528-2.449-9.045-2.449zm-49.919 93.807c-4.481 0-8.542-.963-12.185-2.889-3.602-1.969-6.449-4.669-8.543-8.103-2.051-3.476-3.077-7.391-3.077-11.746s1.026-8.249 3.077-11.683c2.094-3.475 4.941-6.176 8.543-8.102 3.643-1.968 7.725-2.952 12.248-2.952 3.81 0 7.244.67 10.301 2.01 3.098 1.34 5.695 3.266 7.788 5.778l-6.532 6.03c-2.973-3.433-6.658-5.15-11.055-5.15-2.722 0-5.15.607-7.286 1.821-2.135 1.173-3.81 2.827-5.025 4.962-1.172 2.136-1.758 4.564-1.758 7.286 0 2.722.586 5.151 1.758 7.286a13.168 13.168 0 005.025 5.025c2.136 1.173 4.564 1.759 7.286 1.759 4.397 0 8.082-1.738 11.055-5.213l6.532 6.029c-2.093 2.555-4.69 4.502-7.788 5.842-3.099 1.34-6.554 2.01-10.364 2.01zm42.297-45.475c4.061 0 7.6.795 10.615 2.387 3.015 1.591 5.36 3.936 7.034 7.034 1.675 3.099 2.513 6.847 2.513 11.244v24.056h-10.175v-10.552h-20.1v10.552h-10.05v-24.056c0-4.397.838-8.145 2.513-11.244 1.675-3.098 4.02-5.443 7.035-7.034 3.015-1.592 6.553-2.387 10.615-2.387zm9.987 26.003v-6.281c0-3.643-.901-6.385-2.701-8.228-1.801-1.884-4.25-2.826-7.349-2.826-3.141 0-5.611.942-7.412 2.826-1.759 1.843-2.638 4.585-2.638 8.228v6.281h20.1zm32.152 19.472a37.08 37.08 0 01-10.112-1.382c-3.225-.963-5.821-2.198-7.789-3.706l3.455-7.663c1.884 1.382 4.124 2.492 6.721 3.329 2.596.838 5.192 1.256 7.788 1.256 2.889 0 5.025-.418 6.407-1.256 1.382-.879 2.073-2.031 2.073-3.454 0-1.047-.419-1.906-1.257-2.576-.795-.712-1.842-1.277-3.14-1.696-1.256-.418-2.973-.879-5.151-1.381-3.35-.796-6.092-1.592-8.228-2.387-2.135-.796-3.978-2.073-5.527-3.832-1.508-1.758-2.261-4.103-2.261-7.034 0-2.555.691-4.858 2.072-6.91 1.382-2.093 3.455-3.747 6.219-4.962 2.805-1.214 6.218-1.821 10.238-1.821 2.805 0 5.548.335 8.228 1.005 2.68.67 5.025 1.633 7.035 2.889l-3.141 7.726c-4.062-2.303-8.123-3.455-12.185-3.455-2.847 0-4.962.461-6.344 1.382-1.34.921-2.01 2.136-2.01 3.643 0 1.508.775 2.638 2.324 3.392 1.591.712 3.999 1.424 7.223 2.135 3.35.796 6.093 1.592 8.229 2.387a13.384 13.384 0 015.464 3.769c1.549 1.717 2.324 4.041 2.324 6.972 0 2.512-.712 4.815-2.135 6.909-1.382 2.052-3.476 3.685-6.282 4.899-2.805 1.215-6.218 1.822-10.238 1.822zm54.7-32.411a33.743 33.743 0 00-12.123-4.208v35.865H300.12v-35.865a34.324 34.324 0 00-12.185 4.208l-3.455-7.6c3.015-1.8 6.281-3.161 9.798-4.082a42.683 42.683 0 0110.867-1.382c3.768 0 7.411.46 10.929 1.382 3.559.921 6.825 2.282 9.798 4.082l-3.454 7.6z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_301_11203">
          <path fill="#fff" d="M0 0H332V332H0z"></path>
        </clipPath>
      </defs>
    </svg>


          <div className="flex space-x-12 items-center">
            <Link href={"/episodes"} className='font-bold text-black'>
              Episodes
            </Link>
            <Link href={"/episodes"} className='font-bold text-black'>
              About
            </Link>
            <div className="flex items-center space-x-2">
            <Link href={"/episodes"} className='font-bold text-black'>
              More
            </Link>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M14.6668 7.99992C14.6668 11.6766 11.6761 14.6666 8.0001 14.6666C4.3241 14.6666 1.33344 11.6766 1.33344 7.99992C1.33344 4.32392 4.3241 1.33325 8.0001 1.33325C11.6761 1.33325 14.6668 4.32392 14.6668 7.99992" stroke="black" stroke-opacity="0.4" stroke-width="1.5"/>
<path d="M10.8139 7.0384C10.8139 7.16574 10.7653 7.29374 10.6679 7.39107L8.35459 9.71574C8.26059 9.80974 8.13326 9.8624 7.99993 9.8624C7.86726 9.8624 7.73993 9.80974 7.64593 9.71574L5.33126 7.39107C5.13659 7.19574 5.13659 6.87974 5.33259 6.6844C5.52859 6.48974 5.84526 6.4904 6.03993 6.68574L7.99993 8.6544L9.95993 6.68574C10.1546 6.4904 10.4706 6.48974 10.6666 6.6844C10.7653 6.78174 10.8139 6.9104 10.8139 7.0384Z" fill="black"/>
</svg>
            </div>

          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className='uppercase font-bold text-black text-sm px-5 py-2 rounded-md tracking-wide border-2 border-black'>
            Recent Episodes
          </button>
          <button className='uppercase font-bold text-white bg-black text-sm px-5 py-2.5 rounded-md tracking-wide button-shadow'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar