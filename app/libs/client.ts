import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import { Blogs } from "../blogs";

export const client = createClient({
  serviceDomain: String(process.env.SERVICE_DOMAIN),
  apiKey: String(process.env.API_KEY),
});
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blogs>({
    endpoint: "blogs",
    queries,
  });
  return listData;
};

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blogs>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
};
