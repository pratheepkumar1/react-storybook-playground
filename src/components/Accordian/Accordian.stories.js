import { Accordian } from "./Accordian";

export default{
    title: 'Components/Accordian',
    tags: ['autodocs'],
    component: Accordian,
}

export const Default = {
    args: {
        data: [
            {
                title:"This is an accordian title",
                content:"This is a description"
            },
            {
                title:"This is an accordian title",
                content:"This is a description"
            },
        ],
      },
};

// export const ThreeStar = {
//     args: {
//         number:3
//     },
// };