import Organization from "@/types/organization";

const BASE_URL = "http://api.gptdao.ai";

const getPartners = async () => {
  try {
    const response = await fetch(`${BASE_URL}/exhibitors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch partners: ${response.statusText}`);
    }
    const data = await response.json();
    const partners = data.data;

    // unify partners with same name
    const S = new Set();
    const unifiedPartners = partners.filter((partner: Organization) => {
      if (S.has(partner.name)) {
        return false;
      }
      S.add(partner.name);
      return true;
    });

    return unifiedPartners;
  } catch (error) {
    console.error("Error fetching partners:", error);
    return [];
  }
};

const getNews = async () => {
  return [];
};

export {
  getPartners,
  getNews,
};
