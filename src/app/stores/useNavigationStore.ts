// stores/useNavigationStore.ts
import { create } from "zustand";
import { animatePageOut } from "../components/animations";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { tabs } from "../utils/consts";

type NavigationStore = {
  changePage: (href: string, router: AppRouterInstance) => void;
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

export const useNavigationStore = create<NavigationStore>((set) => ({
      changePage: (href: string, router: AppRouterInstance) => {
          animatePageOut(href, router, () => {});
          set({activeTab: tabs.length - tabs.findIndex((tab) => tab.href === href)})
      },
      activeTab: tabs.length,
      setActiveTab: (tab: number) => set({activeTab: tab})
}));
