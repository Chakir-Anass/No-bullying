"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTranslations } from "next-intl";
import { team } from "@/lib/team";
import { User2 } from "lucide-react";

export function TeamDrawer() {
  const t = useTranslations("Team");
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='outline' size={"sm"}>
          Team Top10 | Ibn Batouta School
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader className='text-center'>
            <DrawerTitle>{t("title")}</DrawerTitle>
            <DrawerDescription>{t("description")}</DrawerDescription>
          </DrawerHeader>
          <div className='grid grid-cols-2 gap-4 p-4 pb-0'>
            {team.map((member) => (
              <div
                key={member.name}
                className='flex flex-col items-center gap-2'
              >
                <div className='flex items-center justify-center w-10 h-10 rounded-full bg-muted'>
                  <User2 className='w-5 h-5' />
                </div>
                <p className='text-sm font-bold'>{member.name}</p>
                <p className='text-xs text-muted-foreground'>{member.class}</p>
              </div>
            ))}
          </div>
          <DrawerFooter></DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
