import Skeleton from "react-loading-skeleton";

export default function Loading({count}) {
    return (
        // <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" animation="wave" width={250} height={60} />
        <Skeleton count={count} direction='rtl' duration={2} height={50}
                  baseColor="#f8f8f8" highlightColor="#d8d8d8"/>
    )
}