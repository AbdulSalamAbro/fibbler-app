export const COMPANY_NAME = "fibbler";

export const FROM_EMAIL = "adam@fibbler.co";

export const SUPPORT_EMAIL = "support@fibbler.co";

export const FREE_TIER =
  process.env.NODE_ENV === "production"
    ? "prod_PoFVx2kF2vCer8"
    : "prod_PoChL0sdA99CM7";

export const GROWTH_TIER =
  process.env.NODE_ENV === "production"
    ? "prod_PhRhHvwLbvBpNZ"
    : "prod_OF8EtZtHxKrEBb";

export const UNLIMITED_TIER =
  process.env.NODE_ENV === "production"
    ? "prod_PhRg22qEpQqY37"
    : "prod_PdEjTZXV0HvHy2";

export const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/ month" },
  { value: "annually", label: "Annual", priceSuffix: "/ month" },
];
