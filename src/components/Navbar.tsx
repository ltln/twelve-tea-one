import Image from "next/image";
import classes from "./css/Navbar.module.css";

import { Box, Container } from "@mantine/core";
import cx from 'clsx';

import LogoLight from '@/assets/logo-light.png';
import LogoDark from '@/assets/logo-dark.png';
import Link from "next/link";

export default function NavigationBar() {
    return (
        <header className={classes.header}>
            <Container size="lg" className={classes.links}>
                <Link href="/" className={classes.link}>Home</Link>
                <Link href="/members" className={classes.link}>Members</Link>
                <Image src={LogoLight} className={cx(classes.logo)} alt="logo" height={45}  />
                <Link href="/blog" className={classes.link}>Blog</Link>
                <Link href="/about" className={classes.link}>About</Link>
            </Container>
        </header>
    )
}